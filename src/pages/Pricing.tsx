import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, Percent, CreditCard, Calendar, ArrowRight } from "lucide-react";

const pricingFeatures = [
    {
        title: "Commission Rate",
        value: "10%",
        description: "We take a simple 10% commission on each sale. No hidden fees, no surprises.",
        icon: Percent,
    },
    {
        title: "Payment Processing",
        value: "2.9% + 30¢",
        description: "Standard payment processing fees apply for credit card transactions via Stripe.",
        icon: CreditCard,
    },
    {
        title: "Payout Schedule",
        value: "Weekly",
        description: "Receive your earnings every week, directly to your connected bank account.",
        icon: Calendar,
    },
];

const included = [
    "Unlimited product listings",
    "Analytics dashboard",
    "Secure file hosting",
    "Customer management",
    "Promo codes & discounts",
    "Instant digital delivery",
    "24/7 customer support",
    "Verified seller badge (eligible)",
];

const Pricing = () => {
    return (
        <>
            <Helmet>
                <title>Pricing & Fees — 94mercato</title>
                <meta
                    name="description"
                    content="Transparent pricing for sellers on 94mercato. Learn about our commission rates, payment processing, and what's included."
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
                                Simple, Transparent Pricing
                            </h1>
                            <p className="text-lg text-muted-foreground animate-fade-up delay-200">
                                No monthly fees. No setup costs. You only pay when you make a sale.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Pricing Cards */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="grid md:grid-cols-3 gap-6 mb-16">
                            {pricingFeatures.map((feature, index) => (
                                <div
                                    key={feature.title}
                                    className={`glass-card-elevated p-8 text-center animate-fade-up`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-5">
                                        <feature.icon className="h-7 w-7 text-champagne" />
                                    </div>
                                    <p className="text-sm text-muted-foreground mb-2">{feature.title}</p>
                                    <p className="text-3xl font-serif font-bold text-champagne mb-3">
                                        {feature.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* What's Included */}
                        <div className="max-w-2xl mx-auto">
                            <h2 className="font-serif text-2xl md:text-3xl font-medium text-center mb-8">
                                Everything Included
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {included.map((item, index) => (
                                    <div
                                        key={item}
                                        className={`flex items-center gap-3 animate-fade-up`}
                                        style={{ animationDelay: `${index * 50}ms` }}
                                    >
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="h-4 w-4 text-green-500" />
                                        </div>
                                        <span className="text-muted-foreground">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Example Calculation */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury">
                        <div className="max-w-xl mx-auto glass-card-elevated p-8">
                            <h3 className="font-serif text-xl font-medium mb-6 text-center">
                                Example Calculation
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Product Price</span>
                                    <span className="font-medium">$49.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Commission (10%)</span>
                                    <span className="text-red-400">-$4.90</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Payment Processing (~3%)</span>
                                    <span className="text-red-400">-$1.72</span>
                                </div>
                                <hr className="border-border" />
                                <div className="flex justify-between text-lg">
                                    <span className="font-medium">You Receive</span>
                                    <span className="font-bold text-champagne">$42.38</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="section-padding">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Ready to start selling?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                            Join thousands of creators earning with 94mercato.
                        </p>
                        <Link
                            to="/sell"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-champagne text-midnight font-medium rounded-full hover:bg-champagne/90 transition-colors"
                        >
                            Start Selling
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Pricing;
