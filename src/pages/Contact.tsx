import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, HelpCircle, Send, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactOptions = [
  {
    icon: HelpCircle,
    title: "Support",
    description: "Get help with your account, purchases, or technical issues.",
    email: "support@94mercato.com",
  },
  {
    icon: MessageSquare,
    title: "Sales",
    description: "Questions about selling, commissions, or partnerships.",
    email: "sellers@94mercato.com",
  },
  {
    icon: Mail,
    title: "Press",
    description: "Media inquiries and press kit requests.",
    email: "press@94mercato.com",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data as fallback
    const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    const mailtoLink = `mailto:support@94mercato.com?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

    // Simulate a brief delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));

    // Open the mailto link
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Opening your email client...", {
      description: "Your message has been prepared. Please send it from your email app."
    });

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact — 94mercato</title>
        <meta
          name="description"
          content="Get in touch with 94mercato. Contact our support team, sales, or press departments."
        />
      </Helmet>
      <Layout>
        {/* Hero */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="heading-display text-4xl md:text-6xl mb-4">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                We'd love to hear from you. Choose an option below or send us a
                message.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container-luxury">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {contactOptions.map((option) => (
                <a
                  key={option.title}
                  href={`mailto:${option.email}`}
                  className="glass-card-elevated p-6 text-center hover:shadow-elevated transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-champagne/20 transition-colors">
                    <option.icon className="h-5 w-5 text-champagne" />
                  </div>
                  <h3 className="font-serif text-lg font-medium mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {option.description}
                  </p>
                  <span className="text-sm text-champagne break-all">{option.email}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-stone/30">
          <div className="container-luxury">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <span className="text-xs tracking-widest uppercase text-champagne">
                  Send a Message
                </span>
                <h2 className="heading-large text-3xl md:text-4xl mt-3">
                  Contact Form
                </h2>
              </div>

              <div className="glass-card-elevated p-6 md:p-8">
                {isSuccess ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Message Prepared!</h3>
                    <p className="text-muted-foreground">
                      Your email client should open with your message. Please send it to complete.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button type="submit" variant="luxury" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Preparing...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="section-padding bg-background">
          <div className="container-luxury text-center">
            <h2 className="font-serif text-xl md:text-2xl font-medium mb-4">
              Looking for quick answers?
            </h2>
            <p className="text-muted-foreground mb-6">
              Check out our FAQ section for common questions about buying, selling,
              and account management.
            </p>
            <Button asChild variant="luxury-outline" size="lg">
              <Link to="/faq">View FAQ</Link>
            </Button>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
