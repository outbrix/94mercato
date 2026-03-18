import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Privacy Policy for 94mercato. Learn how we collect, use, and protect your personal data for our digital marketplace."
        />
        <link rel="canonical" href="https://94mercato.com/privacy" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This Privacy Policy explains how <strong className="text-foreground">Outbrix US LLC</strong> ("Company," "we," "us," or "our"), operator of the 94mercato platform ("Platform"), collects, uses, discloses, and protects personal data from users worldwide, including our obligations under the GDPR (EEA/UK) and CCPA/CPRA (California).
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. DATA WE COLLECT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information you provide directly to us, automatically via using our services, or from third-party services like Stripe.
              </p>
              
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">Direct Collection</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Account Data:</strong> Name, email address, username.</li>
                <li><strong className="text-foreground">Profile Data:</strong> Bio, avatar, store description.</li>
                <li><strong className="text-foreground">Transaction Data:</strong> Purchase history, download Logs.</li>
                <li><strong className="text-foreground">Seller Data:</strong> Payout details (via Stripe Connect).</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. LEGAL BASIS FOR PROCESSING (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the EEA/UK, our lawful bases include:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Contract (Art. 6(1)(b)):</strong> Running your account, processing purchases and payouts.</li>
                <li><strong className="text-foreground">Legitimate Interests (Art. 6(1)(f)):</strong> Fraud prevention, troubleshooting, general analytics.</li>
                <li><strong className="text-foreground">Legal Obligation (Art. 6(1)(c)):</strong> Tax records, sanctions screening.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. HOW WE USE YOUR DATA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> We use collected data to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Secure your account and prevent fraudulent purchases;</li>
                <li>Facilitate product distribution and payouts with Stripe;</li>
                <li>Conduct pre-publication reviews of Seller listings;</li>
                <li>Analyze traffic logs to improve platform stability and performance.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. DATA SHARING</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We share personal data with processors only for operations, e.g., <strong className="text-foreground">Stripe, Inc.</strong> (payments), and <strong className="text-foreground">Google LLC</strong> (Analytics). We do not sell your personal data.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. YOUR RIGHTS (GDPR / CCPA)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you have rights of:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Access & Rectification:</strong> Review/edit account details.</li>
                <li><strong className="text-foreground">Erasure:</strong> Request deletion (subject to legal retentions).</li>
                <li><strong className="text-foreground">Objection/Restriction:</strong> Direct processing opt-out choices.</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                For data requests, email us at <a href="mailto:privacy@94mercato.com" className="text-champagne">privacy@94mercato.com</a>.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}