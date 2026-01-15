import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    XCircle,
    FileCheck,
    Shield,
    Image as ImageIcon,
    FileType,
    ArrowRight
} from "lucide-react";

const guidelines = [
    {
        title: "Original Work Only",
        description: "All products must be your own original creation. No reselling, PLR, or stolen content.",
        icon: Shield,
    },
    {
        title: "High-Quality Assets",
        description: "Products should be professionally designed, well-organized, and ready for immediate use.",
        icon: FileCheck,
    },
    {
        title: "Clear Documentation",
        description: "Include clear instructions, file lists, and any necessary documentation for buyers.",
        icon: FileType,
    },
    {
        title: "Accurate Previews",
        description: "Product images should accurately represent what buyers will receive. No misleading mockups.",
        icon: ImageIcon,
    },
];

const allowed = [
    "Website templates & themes",
    "UI kits & design systems",
    "Icons & illustrations",
    "Fonts & typography",
    "Mockups & presentations",
    "Online courses & tutorials",
    "Code snippets & plugins",
    "Graphics & textures",
];

const prohibited = [
    "Resold or PLR content",
    "Copyrighted material",
    "Adult or explicit content",
    "Malware or harmful code",
    "Misleading products",
    "AI-generated without disclosure",
    "Counterfeit or knockoffs",
    "Incomplete or broken files",
];

const Guidelines = () => {
    return (
        <>
            <Helmet>
                <title>Seller Guidelines — 94mercato</title>
                <meta
                    name="description"
                    content="Quality standards and guidelines for selling on 94mercato. Learn what's allowed and how to create a successful seller profile."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6 animate-fade-up">
                                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                                    For Sellers
                                </span>
                            </span>
                            <h1 className="heading-display text-4xl md:text-5xl mb-4 animate-fade-up delay-100">
                                Seller Guidelines
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                Our quality standards ensure a premium experience for everyone.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Core Guidelines */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-12">
                            Quality Standards
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {guidelines.map((item, index) => (
                                <div
                                    key={item.title}
                                    className={`glass-card-elevated p-6 animate-fade-up`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-champagne/10 flex items-center justify-center flex-shrink-0">
                                            <item.icon className="h-6 w-6 text-champagne" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Allowed vs Prohibited */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury">
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Allowed */}
                            <div className="glass-card-elevated p-8">
                                <h3 className="font-serif text-xl font-medium mb-6 flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5 text-green-500" />
                                    Allowed Content
                                </h3>
                                <ul className="space-y-3">
                                    {allowed.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm">
                                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Prohibited */}
                            <div className="glass-card-elevated p-8">
                                <h3 className="font-serif text-xl font-medium mb-6 flex items-center gap-2">
                                    <XCircle className="h-5 w-5 text-red-500" />
                                    Prohibited Content
                                </h3>
                                <ul className="space-y-3">
                                    {prohibited.map((item) => (
                                        <li key={item} className="flex items-center gap-3 text-sm">
                                            <XCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
                                            <span className="text-muted-foreground">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Ready to become a seller?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            If your products meet our guidelines, we'd love to have you on 94mercato.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/sell"
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                            >
                                Start Selling
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                to="/seller-policy"
                                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
                            >
                                View Seller Policy
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Guidelines;
