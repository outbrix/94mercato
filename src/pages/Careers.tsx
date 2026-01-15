import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Briefcase, Heart, Mail } from "lucide-react";

const Careers = () => {
    return (
        <>
            <Helmet>
                <title>Careers — 94mercato</title>
                <meta
                    name="description"
                    content="Join the 94mercato team. We're building the future of digital marketplaces. Check out our open positions."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6 animate-fade-up">
                                <Briefcase className="h-4 w-4 text-champagne" />
                                <span className="text-xs tracking-widest uppercase text-muted-foreground">
                                    Join Us
                                </span>
                            </span>
                            <h1 className="heading-display text-4xl md:text-5xl mb-4 animate-fade-up delay-100">
                                Work at 94mercato
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                Help us build the future of digital marketplaces.
                            </p>
                        </div>
                    </div>
                </section>

                {/* No Positions */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="max-w-xl mx-auto text-center">
                            <div className="w-24 h-24 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-8">
                                <Heart className="h-12 w-12 text-champagne" />
                            </div>
                            <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                                No open positions right now
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                We're a small, passionate team and don't have any openings at the moment.
                                But if you're exceptional at what you do, we'd still love to hear from you!
                            </p>

                            <div className="glass-card-elevated p-8 text-left">
                                <h3 className="font-medium mb-4 flex items-center gap-2">
                                    <Mail className="h-5 w-5 text-champagne" />
                                    Get in touch
                                </h3>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Think you'd be a great fit? Send us your portfolio and a note about why you want to join 94mercato.
                                </p>
                                <a
                                    href="mailto:careers@94mercato.com"
                                    className="text-champagne hover:underline"
                                >
                                    careers@94mercato.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-8">
                            What we value
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            <div className="glass-card-elevated p-6">
                                <h3 className="font-medium mb-2">Craftsmanship</h3>
                                <p className="text-sm text-muted-foreground">
                                    We take pride in building things that last.
                                </p>
                            </div>
                            <div className="glass-card-elevated p-6">
                                <h3 className="font-medium mb-2">Creativity</h3>
                                <p className="text-sm text-muted-foreground">
                                    We love working with and for creators.
                                </p>
                            </div>
                            <div className="glass-card-elevated p-6">
                                <h3 className="font-medium mb-2">Community</h3>
                                <p className="text-sm text-muted-foreground">
                                    We build for the people who use our platform.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stay Updated */}
                <section className="section-padding">
                    <div className="container-luxury text-center">
                        <p className="text-muted-foreground mb-4">
                            Want to be notified when we're hiring?
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Careers;
