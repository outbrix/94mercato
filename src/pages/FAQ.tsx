import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { ChevronDown, HelpCircle, ShoppingBag, CreditCard, UserCog, Package, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQCategory {
    id: string;
    title: string;
    icon: React.ElementType;
    items: FAQItem[];
}

const faqData: FAQCategory[] = [
    {
        id: "buying",
        title: "Buying",
        icon: ShoppingBag,
        items: [
            {
                question: "How do I purchase a product?",
                answer: "Simply browse our marketplace, add items to your cart, and proceed to checkout. We accept all major credit cards through our secure Stripe payment system."
            },
            {
                question: "How do I download my purchased products?",
                answer: "After completing your purchase, you'll be redirected to a success page with download links. You can also access your purchases anytime from your Purchases dashboard."
            },
            {
                question: "Can I get a refund?",
                answer: "Yes, we offer refunds within 14 days of purchase if the product doesn't match its description or has technical issues. Please review our refund policy for complete details."
            },
            {
                question: "Are the products licensed for commercial use?",
                answer: "Most products include commercial licenses, but this varies by product. Always check the license type on the product page before purchasing."
            }
        ]
    },
    {
        id: "selling",
        title: "Selling",
        icon: Package,
        items: [
            {
                question: "How do I become a seller?",
                answer: "Click 'Sell' in the navigation, then complete our seller onboarding process. You'll need to connect your Stripe account to receive payments."
            },
            {
                question: "What commission does 94mercato take?",
                answer: "We take a 20% commission on each sale. You receive 80% of every sale directly to your connected Stripe account."
            },
            {
                question: "How do I upload a product?",
                answer: "From your Seller Dashboard, click 'Upload Product'. Fill in the product details, upload your files and thumbnail, set your price, and publish."
            },
            {
                question: "When do I get paid?",
                answer: "Payments are processed through Stripe and typically arrive in your bank account within 2-7 business days after a sale."
            },
            {
                question: "Can I create promo codes?",
                answer: "Yes! Sellers can create custom promo codes from their dashboard to offer discounts on their products."
            }
        ]
    },
    {
        id: "account",
        title: "Account",
        icon: UserCog,
        items: [
            {
                question: "How do I reset my password?",
                answer: "Click 'Forgot password?' on the login page, enter your email, and we'll send you a reset link."
            },
            {
                question: "Can I change my email address?",
                answer: "For security reasons, email changes require verification. Please contact our support team to update your email."
            },
            {
                question: "How do I update my profile?",
                answer: "Go to your Profile page to update your display name, bio, and avatar. Sellers can also update their store information."
            }
        ]
    },
    {
        id: "payments",
        title: "Payments",
        icon: CreditCard,
        items: [
            {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express) through our secure Stripe integration."
            },
            {
                question: "Is my payment information secure?",
                answer: "Absolutely. We use Stripe for payment processing, which is PCI-DSS Level 1 certified – the highest level of security certification."
            },
            {
                question: "Can I pay with PayPal?",
                answer: "Currently, we only support card payments through Stripe. PayPal integration is planned for a future update."
            }
        ]
    },
    {
        id: "security",
        title: "Security & Privacy",
        icon: Shield,
        items: [
            {
                question: "How do you protect my data?",
                answer: "We use industry-standard encryption and security measures. Your personal data is never sold to third parties. See our Privacy Policy for details."
            },
            {
                question: "Are the digital products scanned for malware?",
                answer: "We review all products before they go live, but we recommend scanning downloaded files with your own antivirus software."
            }
        ]
    }
];

const FAQAccordionItem = ({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) => (
    <div className="border-b border-border last:border-b-0">
        <button
            onClick={toggle}
            className="w-full flex items-center justify-between py-4 text-left hover:text-champagne transition-colors"
        >
            <span className="font-medium pr-4">{item.question}</span>
            <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
            <p className="text-muted-foreground">{item.answer}</p>
        </div>
    </div>
);

const FAQ = () => {
    const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const toggleItem = (categoryId: string, index: number) => {
        const key = `${categoryId}-${index}`;
        setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            <Helmet>
                <title>FAQ — 94mercato</title>
                <meta
                    name="description"
                    content="Frequently asked questions about buying, selling, payments, and using 94mercato digital marketplace."
                />
            </Helmet>
            <Layout>
                {/* Hero */}
                <section className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-champagne/10 flex items-center justify-center">
                                <HelpCircle className="w-8 h-8 text-champagne" />
                            </div>
                            <h1 className="heading-display text-4xl md:text-6xl mb-4">
                                Frequently Asked Questions
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground">
                                Find answers to common questions about buying, selling, and using our platform.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Content */}
                <section className="section-padding">
                    <div className="container-luxury">
                        <div className="max-w-3xl mx-auto space-y-12">
                            {faqData.map((category) => (
                                <div key={category.id} className="glass-card-elevated p-6 md:p-8">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center">
                                            <category.icon className="h-5 w-5 text-champagne" />
                                        </div>
                                        <h2 className="font-serif text-xl font-medium">{category.title}</h2>
                                    </div>
                                    <div className="divide-y divide-border">
                                        {category.items.map((item, index) => (
                                            <FAQAccordionItem
                                                key={index}
                                                item={item}
                                                isOpen={!!openItems[`${category.id}-${index}`]}
                                                toggle={() => toggleItem(category.id, index)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Still Have Questions */}
                <section className="section-padding bg-stone/30">
                    <div className="container-luxury text-center">
                        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                            Can't find what you're looking for? Our support team is here to help.
                        </p>
                        <Button asChild variant="luxury" size="lg">
                            <Link to="/contact">Contact Support</Link>
                        </Button>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default FAQ;
