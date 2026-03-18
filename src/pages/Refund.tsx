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
              <p className="text-muted-foreground mt-2">Operated by: Outbrix US LLC — Sheridan, Wyoming, USA</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. DIGITAL GOODS — GENERAL POLICY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All products sold on <strong className="text-foreground">94mercato</strong> are <strong className="text-foreground">digital goods delivered electronically</strong>. Due to the nature of digital products — which are immediately accessible and cannot be "returned" in any meaningful sense — <strong className="text-foreground">all sales are final by default</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you complete a purchase, you receive immediate access to download the Product. This constitutes full delivery of the digital goods. By completing a purchase, you expressly acknowledge and agree to this no-refund policy.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. EU / EEA CONSUMER RIGHTS WAIVER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the <strong className="text-foreground">European Union or European Economic Area</strong>: under EU Consumer Rights Directive 2011/83/EU, consumers ordinarily have a 14-day right of withdrawal for digital content. However, this right does not apply where:
              </p>
              <ul className="space-y-2 text-muted-foreground list-none pl-6 mb-4">
                <li><strong className="text-foreground">(a)</strong> delivery has begun with the consumer's <strong className="text-foreground">prior express consent</strong>, and</li>
                <li><strong className="text-foreground">(b)</strong> the consumer has <strong className="text-foreground">acknowledged that the right of withdrawal is lost</strong> once performance has begun.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By completing a purchase on 94mercato, you expressly:
              </p>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-6 mb-4">
                <li><strong className="text-foreground">Consent</strong> to the immediate commencement of digital content delivery; and</li>
                <li><strong className="text-foreground">Acknowledge</strong> that your right of withdrawal is waived upon the commencement of performance (i.e., when download or access is made available), in accordance with Article 16(m) of Directive 2011/83/EU.</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This waiver is collected at checkout and is logged for compliance purposes.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. EXCEPTIONS — WHEN A REFUND MAY BE ISSUED</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Despite the general no-refund policy, a refund <strong className="text-foreground">may</strong> be granted at the Company's sole discretion in the following limited circumstances:
              </p>
              
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Situation</th>
                      <th className="py-2 pl-4 font-medium">Outcome</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top">File is corrupt or fundamentally broken and Seller fails to resolve within 5 business days</td>
                      <td className="py-2 pl-4 align-top font-medium text-foreground">Refund eligible</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top">Product is materially different from its description or previews</td>
                      <td className="py-2 pl-4 align-top font-medium text-foreground">Refund eligible (requires evidence)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top">Duplicate charge or billing error</td>
                      <td className="py-2 pl-4 align-top font-medium text-foreground">Full refund</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top">Technical failure preventing download for 48+ hours, unresolved by support</td>
                      <td className="py-2 pl-4 align-top font-medium text-foreground">Refund eligible</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top">Fraudulent transaction (verified by Company investigation)</td>
                      <td className="py-2 pl-4 align-top font-medium text-foreground">Full refund</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4">Refunds are <strong className="text-foreground">not</strong> granted for:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Change of mind after purchase</li>
                <li>Incompatibility with user's software/OS not disclosed in the listing (where the Seller clearly stated requirements)</li>
                <li>Failure to read the product description or license terms</li>
                <li>Downloadable content that has already been accessed or downloaded</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. SUBSCRIPTION CANCELLATIONS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Where the Platform offers subscription services (e.g., Creator Pro):</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Subscriptions may be cancelled at any time through your account settings.</li>
                <li>Cancellation takes effect at the <strong className="text-foreground">end of the current billing period</strong>.</li>
                <li>No partial refunds are issued for unused subscription time, except where required by law.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. DISPUTE RESOLUTION PROCESS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">To request a refund or raise a dispute:</p>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-6 mb-4">
                <li><strong className="text-foreground">Contact Support First:</strong> Email <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a> within <strong className="text-foreground">7 days</strong> of purchase with your order ID, description of the issue, and supporting evidence.</li>
                <li><strong className="text-foreground">Review Period:</strong> Our team will review within <strong className="text-foreground">5 business days</strong> and may contact the Seller for their response.</li>
                <li><strong className="text-foreground">Decision:</strong> The Company's determination is <strong className="text-foreground">final and binding</strong> within the dispute resolution process.</li>
                <li><strong className="text-foreground">Escalation:</strong> For unresolved disputes, refer to the Dispute Resolution / Arbitration provisions in the <strong className="text-foreground">Terms of Service</strong>.</li>
              </ol>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. CHARGEBACK POLICY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Filing a chargeback with your bank or card issuer without first contacting 94mercato support constitutes a violation of these Terms. The Company reserves the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Permanently suspend your account upon initiation of a bad-faith chargeback;</li>
                <li>Pursue recovery of funds and associated chargeback fees;</li>
                <li>Share evidence of fraudulent chargebacks with Stripe and other payment processors.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. SELLER OBLIGATIONS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are responsible for the quality and accuracy of their products. Where a refund is issued due to Seller error (corrupt file, material misdescription), the refund amount <strong className="text-foreground">may be deducted from the Seller's future payouts</strong> or reclaimed from their Stripe Connect balance, subject to Stripe's policies.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. CONTACT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For refund inquiries: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a><br/>
                Outbrix US LLC — Sheridan, Wyoming, USA
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
