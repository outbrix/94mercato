import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Refund() {
  return (
    <>
      <Helmet>
        <title>Refund Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Refund & Cancellation Policy for 94mercato. Understand our rules for digital goods and EU Consumer rights waivers."
        />
        <link rel="canonical" href="https://94mercato.com/refund" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Refund Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                All products sold on <strong className="text-foreground">94mercato</strong> are digital goods delivered electronically. Due to the nature of digital offerings which are instantly accessible, <strong className="text-foreground">all sales are final by default</strong>. By completing a purchase, you acknowledge and agree that access to downloads constitutes full delivery of goods.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. EU / EEA CONSUMER RIGHTS WAIVER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the European Union or European Economic Area: under EU Consumer Rights Directive 2011/83/EU, consumers ordinarily have a 14-day right of withdrawal for digital content. However, this right does not apply where:
              </p>
              <ul className="space-y-2 text-muted-foreground list-decimal pl-6">
                <li>Delivery has begun with the consumer's prior express consent; and</li>
                <li>The consumer has acknowledged that the right of withdrawal is lost once performance has begun.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By purchasing on 94mercato, you consent to the immediate commencement of delivery and waive your withdrawal right upon download or access.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. EXCEPTIONS — WHEN A REFUND MAY BE ISSUED</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A refund may be granted at the Company's sole discretion in the following limited circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Corrupt/Fundamentally Broken File:</strong> Where a Seller fails to resolve within 5 business days.</li>
                <li><strong className="text-foreground">Materially Different Description:</strong> Subject to evidence verification.</li>
                <li><strong className="text-foreground">Duplicate Billing Errors:</strong> System duplicate charges.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. CHARGEBACK POLICY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Filing a chargeback with your bank or card issuer without first contacting 94mercato support constitutes a violation of these Terms and may result in permanent suspension of account access.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. DISPUTE PROCESS</h2>
              <p className="text-muted-foreground leading-relaxed">
                To request a refund review, email <a href="mailto:support@94mercato.com" className="text-champagne">support@94mercato.com</a> within <strong className="text-foreground">7 days</strong> of purchase with your order ID, a description of the issue, and supporting evidence. Our team will review and determine the outcome.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
