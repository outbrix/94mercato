import { useState, useEffect, useRef } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AvatarCropModal } from "@/components/ui/avatar-crop-modal";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Loader2, User, Mail, Camera, Save, ArrowLeft, Lock, Eye, EyeOff, Globe, LogOut, ShieldAlert } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";

const Profile = () => {
    const { user, isLoading: authLoading, updateProfile, logout } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);
    const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

    // Crop modal state
    const [cropModalOpen, setCropModalOpen] = useState(false);
    const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null);
    const [selectedFileName, setSelectedFileName] = useState<string>("");

    // Password change state
    const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [passwordData, setPasswordData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [passwordError, setPasswordError] = useState("");
    const [showOtpInput, setShowOtpInput] = useState(false);
    const [otp, setOtp] = useState("");
    const [otpResendTimer, setOtpResendTimer] = useState(0);

    const [formData, setFormData] = useState({
        name: "",
        display_name: "",
        bio: "",
        avatar_url: "",
        website: "",
    });

    // Redirect if not logged in
    useEffect(() => {
        if (!authLoading && !user) {
            navigate("/login");
        }
    }, [authLoading, user, navigate]);

    // Populate form with current user data
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || "",
                display_name: user.display_name || "",
                bio: user.bio || "",
                avatar_url: user.avatar_url || "",
                website: (user as any).website || "",
            });
            setAvatarPreview(user.avatar_url || null);
        }
    }, [user]);

    // Handle logout
    const handleLogout = () => {
        logout();
        toast({
            title: "Logged Out",
            description: "You have been logged out successfully.",
        });
        navigate("/login");
    };

    // Handle avatar file selection - opens crop modal
    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (!file.type.startsWith('image/')) {
            toast({ title: "Invalid File", description: "Please select an image file.", variant: "destructive" });
            return;
        }

        if (file.size > 5 * 1024 * 1024) {
            toast({ title: "File Too Large", description: "Please select an image smaller than 5MB.", variant: "destructive" });
            return;
        }

        setSelectedFileName(file.name);
        const reader = new FileReader();
        reader.onload = (e) => {
            setSelectedImageSrc(e.target?.result as string);
            setCropModalOpen(true);
        };
        reader.readAsDataURL(file);

        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // Handle cropped image from modal
    const handleCropComplete = async (croppedBlob: Blob) => {
        setCropModalOpen(false);
        setIsUploadingAvatar(true);

        try {
            const urlResponse = await api.post('/auth/avatar-upload-url', {
                fileName: selectedFileName || 'avatar.jpg',
            });
            const { uploadUrl, avatarUrl } = urlResponse.data;

            await fetch(uploadUrl, {
                method: 'PUT',
                body: croppedBlob,
                headers: { 'Content-Type': 'image/jpeg' },
            });

            setFormData(prev => ({ ...prev, avatar_url: avatarUrl }));
            const previewUrl = URL.createObjectURL(croppedBlob);
            setAvatarPreview(previewUrl);

            toast({ title: "Avatar Uploaded", description: "Click 'Save Changes' to update your profile." });

        } catch (err: unknown) {
            const axiosErr = err as { response?: { data?: { message?: string } } };
            toast({ title: "Upload Failed", description: axiosErr.response?.data?.message || "Could not upload avatar.", variant: "destructive" });
        } finally {
            setIsUploadingAvatar(false);
            setSelectedImageSrc(null);
        }
    };

    const handleCropCancel = () => {
        setCropModalOpen(false);
        setSelectedImageSrc(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await updateProfile(formData as any);
            toast({ title: "Profile Updated", description: "Your profile has been updated successfully." });
        } catch (err: unknown) {
            const axiosErr = err as { response?: { data?: { message?: string } } };
            toast({ title: "Update Failed", description: axiosErr.response?.data?.message || "Could not update profile.", variant: "destructive" });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Password change handler
    const handlePasswordChange = async (e: React.FormEvent) => {
        e.preventDefault();
        setPasswordError("");

        if (passwordData.newPassword.length < 8) {
            setPasswordError("New password must be at least 8 characters.");
            return;
        }
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            setPasswordError("New passwords do not match.");
            return;
        }
        if (passwordData.currentPassword === passwordData.newPassword) {
            setPasswordError("New password must be different from current password.");
            return;
        }

        setIsChangingPassword(true);

        try {
            if (!showOtpInput) {
                await api.post('/auth/password/otp');
                setShowOtpInput(true);
                setOtpResendTimer(60);
                toast({ title: "OTP Sent", description: "Please check your email for the verification code." });
            } else {
                if (otp.length !== 6) {
                    setPasswordError("Please enter a valid 6-digit OTP.");
                    setIsChangingPassword(false);
                    return;
                }

                await api.put('/auth/password', {
                    currentPassword: passwordData.currentPassword,
                    newPassword: passwordData.newPassword,
                    otp,
                });

                toast({ title: "Password Changed", description: "Your password has been updated successfully." });

                setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
                setOtp("");
                setShowOtpInput(false);
                setIsPasswordModalOpen(false); // Close modal on success
            }
        } catch (err: unknown) {
            const axiosErr = err as { response?: { data?: { message?: string } } };
            setPasswordError(axiosErr.response?.data?.message || "Failed to process request.");
        } finally {
            setIsChangingPassword(false);
        }
    };

    // Resend Timer countdown
    useEffect(() => {
        if (otpResendTimer > 0) {
            const timer = setInterval(() => setOtpResendTimer(prev => prev - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [otpResendTimer]);

    const handleResendOtp = async () => {
        if (otpResendTimer > 0) return;
        try {
            await api.post('/auth/password/otp');
            setOtpResendTimer(60);
            toast({ title: "OTP Resent", description: "A new code has been sent to your email." });
        } catch (err) {
            toast({ title: "Failed", description: "Could not resend OTP.", variant: "destructive" });
        }
    };

    if (authLoading) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-champagne" />
                </div>
            </Layout>
        );
    }

    if (!user) return null;

    return (
        <>
            <Helmet>
                <title>Account Settings — 94mercato</title>
                <meta name="description" content="Manage your 94mercato profile and account settings." />
            </Helmet>
            
            <Layout>
                <section className="min-h-screen pt-32 pb-24 bg-background">
                    <div className="container-luxury max-w-4xl mx-auto px-4 md:px-8">
                        
                        {/* Header Area */}
                        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <Button
                                    variant="ghost"
                                    onClick={() => navigate(-1)}
                                    className="text-muted-foreground hover:text-foreground mb-4 pl-0"
                                >
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back
                                </Button>
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Account Settings</h1>
                                <p className="text-muted-foreground text-sm md:text-base">
                                    Manage your public profile, security, and account preferences.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                            
                            {/* Main Form Content */}
                            <div className="md:col-span-8 space-y-8">
                                <div className="glass-card-elevated p-6 md:p-8 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md">
                                    <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                        <User className="h-5 w-5 text-champagne" /> 
                                        Public Profile
                                    </h2>
                                    
                                    {/* Avatar Section */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 pb-8 border-b border-border/50">
                                        <div className="relative group cursor-pointer" onClick={handleAvatarClick}>
                                            <input
                                                type="file"
                                                ref={fileInputRef}
                                                onChange={handleFileChange}
                                                accept="image/*"
                                                className="hidden"
                                            />
                                            <div className="h-28 w-28 rounded-full bg-gradient-to-br from-sapphire to-champagne/50 flex items-center justify-center overflow-hidden border-4 border-background shadow-xl group-hover:opacity-90 transition-opacity">
                                                {isUploadingAvatar ? (
                                                    <Loader2 className="h-8 w-8 animate-spin text-cream" />
                                                ) : avatarPreview ? (
                                                    <img
                                                        src={avatarPreview}
                                                        alt={user.display_name}
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <User className="h-12 w-12 text-cream" />
                                                )}
                                            </div>
                                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <Camera className="h-8 w-8 text-white" />
                                            </div>
                                            <button
                                                type="button"
                                                disabled={isUploadingAvatar}
                                                className="absolute bottom-1 right-1 h-8 w-8 rounded-full bg-champagne flex items-center justify-center shadow-lg hover:bg-champagne/80 transition-colors disabled:opacity-50 text-midnight z-10 sm:hidden"
                                            >
                                                <Camera className="h-4 w-4" />
                                            </button>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold mb-1">{user.display_name}</h3>
                                            <p className="text-sm text-muted-foreground mb-3">{user.email}</p>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-sapphire/20 text-champagne capitalize">
                                                    {user.role}
                                                </span>
                                                {user.is_verified && (
                                                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                                        Verified Producer
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Profile Form */}
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {/* Display Name */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label htmlFor="display_name">Display Name</Label>
                                                    <span className="text-[10px] text-muted-foreground">{formData.display_name.length}/50</span>
                                                </div>
                                                <Input
                                                    id="display_name"
                                                    type="text"
                                                    placeholder="Creator alias"
                                                    value={formData.display_name}
                                                    onChange={(e) => setFormData({ ...formData, display_name: e.target.value })}
                                                    disabled={isSubmitting}
                                                    maxLength={50}
                                                    className="bg-background/50"
                                                />
                                            </div>
                                            
                                            {/* Full Name */}
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center">
                                                    <Label htmlFor="name">Full Legal Name</Label>
                                                    <span className="text-[10px] text-muted-foreground">{formData.name.length}/50</span>
                                                </div>
                                                <Input
                                                    id="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    disabled={isSubmitting}
                                                    maxLength={50}
                                                    className="bg-background/50"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email" className="flex items-center gap-2">
                                                Email Address
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    value={user.email}
                                                    disabled
                                                    className="bg-muted/40 pr-10"
                                                />
                                                <Lock className="h-4 w-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50" />
                                            </div>
                                            <p className="text-[11px] text-muted-foreground">Email change requires contacting support.</p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <Label htmlFor="bio">Bio</Label>
                                                <span className="text-[10px] text-muted-foreground">{formData.bio.length}/500</span>
                                            </div>
                                            <Textarea
                                                id="bio"
                                                placeholder="Tell buyers about your work and expertise..."
                                                value={formData.bio}
                                                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                                disabled={isSubmitting}
                                                rows={4}
                                                className="resize-none bg-background/50"
                                                maxLength={500}
                                            />
                                        </div>

                                        {(user.role === 'seller' || user.role === 'admin') && (
                                            <div className="space-y-2">
                                                <Label htmlFor="website">Personal Website / Portfolio</Label>
                                                <div className="relative">
                                                    <Globe className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                                                    <Input
                                                        id="website"
                                                        type="url"
                                                        placeholder="https://yourwebsite.com"
                                                        value={formData.website}
                                                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                                        disabled={isSubmitting}
                                                        maxLength={200}
                                                        className="pl-9 bg-background/50"
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <div className="pt-4 flex justify-end">
                                            <Button
                                                type="submit"
                                                variant="luxury"
                                                size="lg"
                                                className="w-full sm:w-auto min-w-[160px]"
                                                disabled={isSubmitting || isUploadingAvatar}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                        Saving...
                                                    </>
                                                ) : (
                                                    "Save Changes"
                                                )}
                                            </Button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* Sidebar / Account Actions */}
                            <div className="md:col-span-4 space-y-6">
                                {/* Balance Widget */}
                                <div className="glass-card-elevated p-6 rounded-2xl border border-champagne/20 bg-gradient-to-br from-champagne/10 to-transparent">
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2">Available Balance</h3>
                                    <div className="text-3xl font-bold tracking-tight text-foreground">
                                        ${user.balance?.toFixed(2) || "0.00"}
                                    </div>
                                </div>

                                {/* Security & Actions */}
                                <div className="glass-card-elevated p-6 rounded-2xl border border-border/50 bg-card/40 backdrop-blur-md flex flex-col gap-4">
                                    <h3 className="text-lg font-semibold flex items-center gap-2 mb-2">
                                        <ShieldAlert className="h-5 w-5 text-champagne" />
                                        Security
                                    </h3>
                                    
                                    <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
                                        <DialogTrigger asChild>
                                            <Button variant="outline" className="w-full justify-start border-border/50 hover:bg-muted/30 hover:border-border transition-all">
                                                <Lock className="mr-3 h-4 w-4 text-muted-foreground" />
                                                Change Password
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-md bg-card/95 border-border/50 backdrop-blur-xl">
                                            <DialogHeader>
                                                <DialogTitle>Update Password</DialogTitle>
                                                <DialogDescription>
                                                    Ensure your account stays secure by using a strong password. Minimum 8 characters.
                                                </DialogDescription>
                                            </DialogHeader>
                                            
                                            <form onSubmit={handlePasswordChange} className="space-y-4 pt-4">
                                                {passwordError && (
                                                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-md text-sm">
                                                        {passwordError}
                                                    </div>
                                                )}

                                                <div className="space-y-2">
                                                    <Label htmlFor="currentPassword">Current Password</Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="currentPassword"
                                                            type={showCurrentPassword ? "text" : "password"}
                                                            value={passwordData.currentPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                                                            disabled={isChangingPassword}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="newPassword">New Password</Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="newPassword"
                                                            type={showNewPassword ? "text" : "password"}
                                                            value={passwordData.newPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                                                            disabled={isChangingPassword}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                                    <div className="relative">
                                                        <Input
                                                            id="confirmPassword"
                                                            type={showConfirmPassword ? "text" : "password"}
                                                            value={passwordData.confirmPassword}
                                                            onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                                                            disabled={isChangingPassword}
                                                        />
                                                        <button
                                                            type="button"
                                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                                        >
                                                            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                                        </button>
                                                    </div>
                                                </div>

                                                {showOtpInput && (
                                                    <div className="space-y-2 pt-2 animate-fade-in border-t border-border/50">
                                                        <Label htmlFor="otp">Verification Code (OTP)</Label>
                                                        <div className="flex gap-2">
                                                            <Input
                                                                id="otp"
                                                                type="text"
                                                                placeholder="123456"
                                                                value={otp}
                                                                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                                                                disabled={isChangingPassword}
                                                                className="tracking-[0.5em] text-center font-bold text-lg"
                                                            />
                                                            <Button
                                                                type="button"
                                                                variant="secondary"
                                                                onClick={handleResendOtp}
                                                                disabled={otpResendTimer > 0 || isChangingPassword}
                                                                className="w-28 shrink-0"
                                                            >
                                                                {otpResendTimer > 0 ? `${otpResendTimer}s` : "Resend"}
                                                            </Button>
                                                        </div>
                                                        <p className="text-[11px] text-muted-foreground text-center">We sent a 6-digit code to your email.</p>
                                                    </div>
                                                )}

                                                <div className="pt-4">
                                                    <Button
                                                        type="submit"
                                                        variant="luxury"
                                                        className="w-full"
                                                        disabled={isChangingPassword || !passwordData.currentPassword || !passwordData.newPassword || !passwordData.confirmPassword || (showOtpInput && otp.length !== 6)}
                                                    >
                                                        {isChangingPassword ? (
                                                            <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...</>
                                                        ) : (
                                                            <><Lock className="mr-2 h-4 w-4" /> {showOtpInput ? "Verify & Change" : "Send Verification Code"}</>
                                                        )}
                                                    </Button>
                                                </div>
                                            </form>
                                        </DialogContent>
                                    </Dialog>

                                    {/* Logout Button */}
                                    <Button 
                                        variant="outline" 
                                        className="w-full justify-start border-red-500/20 text-red-500 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/30 transition-all"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="mr-3 h-4 w-4" />
                                        Sign Out Safely
                                    </Button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Layout>

            {selectedImageSrc && (
                <AvatarCropModal
                    isOpen={cropModalOpen}
                    imageSrc={selectedImageSrc}
                    onClose={handleCropCancel}
                    onCropComplete={handleCropComplete}
                />
            )}
        </>
    );
};

export default Profile;
