import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Download, Mail, ExternalLink } from "lucide-react";

const Press = () => {
    return (
        <>
            <Helmet>
                <title>Press Kit — 94mercato</title>
                <meta
                    name="description"
                    content="Download 94mercato brand assets, logos, and press materials. Media inquiries and company information."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6 animate-fade-up">
                                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                                    Media
                                </span>
                            </span>
                            <h1 className="heading-display text-4xl md:text-5xl mb-4 animate-fade-up delay-100">
                                Press Kit
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                Brand assets, company information, and media resources.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Brand Assets */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="max-w-3xl mx-auto">
                            {/* Logo Downloads */}
                            <div className="glass-card-elevated p-8 mb-8">
                                <h2 className="font-serif text-xl font-medium mb-6">Brand Assets</h2>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Logo Preview */}
                                    <div className="bg-midnight rounded-xl p-8 flex items-center justify-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sapphire to-sapphire-glow flex items-center justify-center">
                                                <span className="font-serif text-lg font-semibold text-cream">M</span>
                                            </div>
                                            <span className="font-serif text-xl tracking-tight text-cream">
                                                94<span className="text-champagne">mercato</span>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="bg-cream rounded-xl p-8 flex items-center justify-center">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-midnight flex items-center justify-center">
                                                <span className="font-serif text-lg font-semibold text-champagne">M</span>
                                            </div>
                                            <span className="font-serif text-xl tracking-tight text-midnight">
                                                94<span className="text-champagne">mercato</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground mt-6 mb-4">
                                    For logo files and brand guidelines, please contact us.
                                </p>

                                <a
                                    href="mailto:support@94mercato.com"
                                    className="inline-flex items-center gap-2 text-champagne hover:underline"
                                >
                                    <Mail className="h-4 w-4" />
                                    Request brand assets
                                </a>
                            </div>

                            {/* About */}
                            <div className="glass-card-elevated p-8 mb-8">
                                <h2 className="font-serif text-xl font-medium mb-4">About 94mercato</h2>
                                <p className="text-muted-foreground mb-4">
                                    94mercato is a curated marketplace for premium digital products. We connect talented creators
                                    with customers who value quality and craftsmanship. Our platform features templates, UI kits,
                                    courses, mockups, fonts, and more from verified sellers worldwide.
                                </p>
                                <p className="text-muted-foreground">
                                    Founded by Outbrix, 94mercato is on a mission to elevate digital creativity and help creators
                                    earn from their craft.
                                </p>
                            </div>

                            {/* Key Facts */}
                            <div className="glass-card-elevated p-8 mb-8">
                                <h2 className="font-serif text-xl font-medium mb-6">Key Facts</h2>
                                <dl className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <dt className="text-sm text-muted-foreground mb-1">Founded</dt>
                                        <dd className="font-medium">2025</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-muted-foreground mb-1">Headquarters</dt>
                                        <dd className="font-medium">Remote-first</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-muted-foreground mb-1">Parent Company</dt>
                                        <dd className="font-medium">Outbrix</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-muted-foreground mb-1">Website</dt>
                                        <dd className="font-medium">94mercato.com</dd>
                                    </div>
                                </dl>
                            </div>

                            {/* Media Contact */}
                            <div className="glass-card-elevated p-8">
                                <h2 className="font-serif text-xl font-medium mb-4">Media Contact</h2>
                                <p className="text-muted-foreground mb-4">
                                    For press inquiries, interviews, or additional information, please contact:
                                </p>
                                <a
                                    href="mailto:support@94mercato.com"
                                    className="inline-flex items-center gap-2 text-champagne hover:underline text-lg"
                                >
                                    <Mail className="h-5 w-5" />
                                    support@94mercato.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Want to learn more?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Explore our platform or get in touch with our team.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-medium rounded-full hover:bg-secondary transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Press;
