import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function SellerPolicy() {
    return (
        <>
            <Helmet>
                <title>Seller Policy — 94mercato</title>
                <meta
                    name="description"
                    content="Read the Seller Policy for 94mercato. Understand the rules, responsibilities, and guidelines for selling on our marketplace."
                />
                <link rel="canonical" href="https://94mercato.com/seller-policy" />
            </Helmet>
            <Layout>
                <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
                    <div className="container-luxury">
                        <div className="max-w-3xl mx-auto">
                            <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
                            <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Seller Policy</h1>
                            <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </section>

                <section className="section-padding bg-background">
                    <div className="container-luxury">
                        <div className="max-w-3xl mx-auto prose prose-invert">
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Welcome to 94mercato! This Seller Policy outlines the rules and expectations for sellers on our platform. By registering as a seller, you agree to comply with these guidelines.
                            </p>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">1. Becoming a Seller</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                To become a seller on 94mercato, you must:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
                                <li>Provide accurate and complete registration information</li>
                                <li>Connect a valid Stripe account for receiving payouts</li>
                                <li>Agree to our Terms of Service and this Seller Policy</li>
                            </ul>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">2. Product Listings</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                When listing products on our platform, sellers must:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>Provide accurate, honest, and complete product descriptions</li>
                                <li>Use only images that accurately represent the product</li>
                                <li>Set fair and reasonable prices</li>
                                <li>Clearly specify file formats, software requirements, and any limitations</li>
                                <li>Include all necessary documentation and instructions</li>
                                <li>Respond to buyer questions promptly (within 48 hours)</li>
                            </ul>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">3. Intellectual Property</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Sellers are solely responsible for ensuring they have the right to sell their products:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>You must own or have valid licenses for all content you sell</li>
                                <li>Do not sell products that infringe on copyrights, trademarks, or patents</li>
                                <li>Do not resell products purchased from other platforms without proper resale rights</li>
                                <li>Properly attribute any third-party assets used (fonts, images, icons, etc.)</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Violations may result in immediate account suspension and legal action.
                            </p>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">4. Quality Standards</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                All products on 94mercato must meet our quality standards:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>Files must be working, complete, and free of corruption</li>
                                <li>Products must be original work or properly licensed</li>
                                <li>No low-quality, rushed, or incomplete products</li>
                                <li>Products must match their descriptions and preview images</li>
                                <li>Regular updates are expected when bugs are reported</li>
                            </ul>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">5. Commission & Payouts</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Our commission structure and payout terms:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>
                                    <strong className="text-foreground">Platform Commission:</strong> 12% of each sale
                                </li>
                                <li>
                                    <strong className="text-foreground">Your Earnings:</strong> 88% of each sale
                                </li>
                                <li>
                                    <strong className="text-foreground">Payout Schedule:</strong> Automatic via Stripe (typically 2-7 days after sale)
                                </li>
                                <li>
                                    <strong className="text-foreground">Minimum Payout:</strong> No minimum threshold
                                </li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                All payouts are processed through Stripe Connect. You are responsible for any taxes owed on your earnings.
                            </p>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">6. Customer Support</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Sellers are expected to provide reasonable customer support for their products. This includes responding to support requests within 48 hours, providing help with technical issues, and issuing replacements for corrupted files. While refunds are generally not offered for digital products, sellers should work with buyers to resolve issues fairly.
                            </p>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">7. Account Standing</h2>
                            <p className="text-muted-foreground leading-relaxed mb-4">
                                Your seller account remains in good standing as long as you:
                            </p>
                            <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                                <li>Maintain a low refund/dispute rate (below 5%)</li>
                                <li>Respond to support requests promptly</li>
                                <li>Keep products updated and functional</li>
                                <li>Follow all platform rules and guidelines</li>
                            </ul>
                            <p className="text-muted-foreground leading-relaxed mt-4">
                                Accounts with repeated violations may be demoted, suspended, or permanently banned.
                            </p>

                            <h2 className="heading-medium text-2xl mt-12 mb-4">Contact Us</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                If you have any questions about this Seller Policy, please contact our seller support team at{" "}
                                <a href="mailto:sellers@94mercato.com" className="text-champagne hover:text-champagne/80 transition-colors">
                                    sellers@94mercato.com
                                </a>.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
