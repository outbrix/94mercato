import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — 94mercato</title>
        <meta
          name="description"
          content="Read the Terms of Service for 94mercato. Understand the rules and guidelines for using our premium digital marketplace."
        />
        <link rel="canonical" href="https://94mercato.com/terms" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Terms of Service</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Welcome to 94mercato! These Terms of Service ("Terms") govern your use of our website, products, and services. By accessing or using our platform, you agree to be bound by these Terms.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. Account Registration</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may be required to create an account to access certain features of our platform. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. Prohibited Activities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree not to engage in any of the following prohibited activities:
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Violating any laws or regulations.</li>
                <li>Infringing upon the intellectual property rights of others.</li>
                <li>Distributing spam or other unsolicited communications.</li>
                <li>Engaging in any fraudulent or deceptive practices.</li>
                <li>Interfering with the operation of our platform.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on our platform, including text, graphics, logos, and software, is the property of 94mercato or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from our platform without our prior written permission.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, 94mercato shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of our platform.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. Prohibited Products</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following types of products are strictly prohibited on our platform:
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Adult content, pornography, or sexually explicit material</li>
                <li>Products that infringe on intellectual property rights (pirated software, stolen designs, etc.)</li>
                <li>Malware, viruses, or any harmful code</li>
                <li>Products promoting hate speech, violence, or discrimination</li>
                <li>Gambling or lottery-related products</li>
                <li>Weapons, drugs, or controlled substances</li>
                <li>Personal data, hacked accounts, or stolen credentials</li>
                <li>Multi-level marketing or pyramid scheme materials</li>
                <li>Products that violate any applicable laws or regulations</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Sellers found listing prohibited products will have their accounts suspended immediately and may face legal action.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. Intellectual Property & DMCA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We respect intellectual property rights and expect our users to do the same. If you believe that content on our platform infringes your copyright or trademark, you may submit a takedown request.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">To file a DMCA takedown notice, please provide:</strong>
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>Your contact information (name, address, email, phone)</li>
                <li>A description of the copyrighted work you claim has been infringed</li>
                <li>The URL or location of the infringing material on our platform</li>
                <li>A statement that you have a good faith belief that the use is not authorized</li>
                <li>A statement, under penalty of perjury, that the information in your notice is accurate</li>
                <li>Your physical or electronic signature</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Send DMCA notices to:{" "}
                <a href="mailto:dmca@94mercato.com" className="text-champagne hover:text-champagne/80 transition-colors">
                  dmca@94mercato.com
                </a>
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All payments on our platform are processed securely through Stripe. By making a purchase, you agree to the following:
              </p>
              <ul className="space-y-3 text-muted-foreground list-disc pl-6">
                <li>All prices are displayed in the currency shown and include applicable fees</li>
                <li>You authorize the charge to your selected payment method</li>
                <li>Chargebacks filed fraudulently may result in account termination and legal action</li>
                <li>Sellers receive payouts according to the payout schedule minus platform commission</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. Account Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to suspend or terminate your account at any time for violations of these Terms, including but not limited to: selling prohibited products, engaging in fraudulent activity, filing false DMCA claims, or any behavior that harms our community. Upon termination, you will lose access to your account and any pending payouts may be withheld.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms, please contact us at{" "}
                <a href="mailto:support@94mercato.com" className="text-champagne hover:text-champagne/80 transition-colors">
                  support@94mercato.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}