import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function SellerPolicy() {
  return (
    <>
      <Helmet>
        <title>Seller Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Seller Policy for 94mercato. Understand seller eligibility, listing requirements, commissions, payouts, and indemnification policies."
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
              <p className="text-muted-foreground mt-2">Operated by: Outbrix US LLC — Sheridan, Wyoming, USA</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. SCOPE AND ACCEPTANCE</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Seller Policy ("Policy") applies to all users of the 94mercato Platform who list, sell, or offer digital products as sellers ("Sellers"). By activating a seller account, you agree to be bound by this Policy, the Terms of Service, Digital Product License Agreement, and Acceptable Use Policy, all of which are incorporated herein by reference.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to amend this Policy at any time. Continued selling after notification of changes constitutes acceptance.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. SELLER ELIGIBILITY AND ONBOARDING</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.1 Basic Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any registered user may apply to become a Seller. There is <strong className="text-foreground">no mandatory identity verification</strong> prior to listing. However, Sellers must:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Provide accurate account information;</li>
                <li>Connect a valid Stripe account to receive payouts (Stripe Connect required);</li>
                <li>Agree to Stripe's terms of service independently;</li>
                <li>Be at least <strong className="text-foreground">18 years of age</strong>;</li>
                <li>Not be located in or subject to the laws of a restricted jurisdiction (see Terms of Service, Section 9).</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.2 Platform Review Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right, at its sole discretion, to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Reject any Seller application without explanation;</li>
                <li>Restrict, suspend, or permanently ban any Seller account for any reason;</li>
                <li>Conduct enhanced due diligence on any Seller suspected of fraudulent, deceptive, or high-risk behavior.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.3 No Verification Does Not Limit Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The absence of mandatory identity verification does <strong className="text-foreground">not</strong> limit Seller liability for the legality, accuracy, or quality of their Products. Sellers are fully liable for all Products they list.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. PRODUCT LISTING STANDARDS</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.1 Pre-Publication Review</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All Listings are subject to <strong className="text-foreground">mandatory manual review</strong> by the Company prior to publication. The Company's approval of a Listing does not constitute:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>An endorsement of the Product;</li>
                <li>A warranty of quality, accuracy, or fitness for purpose;</li>
                <li>Acceptance of liability for the Product.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company may decline to publish any Listing at its sole discretion.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.2 Listing Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Sellers must:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Provide accurate, complete, and non-misleading product titles and descriptions;</li>
                <li>Upload clear, representative preview images/samples;</li>
                <li>Clearly state the license type (personal, commercial, extended/resale);</li>
                <li>Disclose if the product is AI-generated;</li>
                <li>Accurately categorize the product;</li>
                <li>Specify any technical requirements (software version, OS, etc.).</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.3 Prohibited Products</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Sellers may not list:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Content infringing any third-party intellectual property (copyright, trademark, patent);</li>
                <li>Adult, explicit, or sexually suggestive content;</li>
                <li>Malware, viruses, or harmful code of any kind;</li>
                <li>Content that facilitates illegal activity (phishing kits, credential stuffers, etc.);</li>
                <li>Content that violates any applicable law;</li>
                <li>Products from restricted jurisdictions or that require export licenses;</li>
                <li>Scraped, stolen, or unauthorized copies of third-party assets.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to remove any Listing at any time without prior notice.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. SELLER LIABILITY AND WARRANTIES</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.1 Seller Warranties</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By listing a Product, Sellers represent, warrant, and covenant that:
              </p>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-6 mb-4">
                <li>They are the sole legal owner or authorized licensor of all rights in the Product;</li>
                <li>The Product does not infringe any copyright, trademark, patent, trade secret, or other proprietary right of any third party;</li>
                <li>The Product is free of malware, spyware, or harmful code;</li>
                <li>The Product and its listing comply with all applicable laws, regulations, and these policies;</li>
                <li>All required disclosures (AI-generated status, license terms, technical requirements) have been made accurately.</li>
              </ol>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.2 Ongoing Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Seller obligations are ongoing. If a Product becomes non-compliant after listing (e.g., a third-party license terminates), the Seller must immediately notify the Company and update or remove the Listing.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. COMMISSION AND PAYOUT STRUCTURE</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.1 Commission Rates</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company charges a commission on each transaction as follows:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Listing Type</th>
                      <th className="py-2 pl-4 font-medium">Commission Rate</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Public Marketplace</td>
                      <td className="py-2 pl-4 align-top">6%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Invite-Only</td>
                      <td className="py-2 pl-4 align-top">2%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Subscribers</td>
                      <td className="py-2 pl-4 align-top">3%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Commission rates are subject to change with <strong className="text-foreground">30 days' notice</strong>. Continued selling after notice constitutes acceptance of the revised rates.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.2 Payment Split</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payments are processed and split automatically via <strong className="text-foreground">Stripe Connect</strong>. The Seller receives the sale price minus the applicable commission and any applicable Stripe processing fees, per Stripe's fee schedule.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.3 Payout Timing</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Payouts are governed by Stripe Connect's standard payout schedule. The Company does not hold funds beyond what is required by Stripe's settlement timeline.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.4 Payout Holds and Clawbacks</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Temporarily hold payouts</strong> where fraud, chargebacks, refunds, or policy violations are suspected;</li>
                <li><strong className="text-foreground">Offset any amounts owed</strong> by the Seller (including refunds, chargebacks, or penalties) against current or future payouts;</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers acknowledge that recovery of funds is subject to the capabilities and limitations of Stripe Connect. Where funds are not recoverable via Stripe, the Seller remains contractually liable to repay such amounts upon demand.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.5 Taxes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for all taxes arising from their sales, including income tax, VAT, GST, and withholding tax. The Company does not collect or remit taxes on Sellers' behalf. Sellers indemnify the Company against any tax liability arising from Seller sales.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. INTELLECTUAL PROPERTY</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.1 License to Platform</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By listing a Product, Sellers grant Outbrix US LLC a <strong className="text-foreground">non-exclusive, worldwide, royalty-free license</strong> to display, reproduce, and promote the Product (including preview materials) for the purposes of operating, marketing, and improving the Platform. This license terminates upon removal or delisting of the Product.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.2 DMCA Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company complies with DMCA takedown procedures. A valid takedown notice against a Seller's Product will result in:
              </p>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-6 mb-4">
                <li>Removal of the Product;</li>
                <li>Notification to the Seller;</li>
                <li>Opportunity for Seller to submit a counter-notice.</li>
              </ol>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Repeated or egregious IP infringement is grounds for permanent account termination.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. SELLER INDEMNIFICATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                Sellers agree to <strong className="text-foreground">fully indemnify, defend, and hold harmless</strong> Outbrix US LLC, its directors, officers, employees, agents, successors, and assigns from and against any and all claims, damages, liabilities, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Any Product listed by the Seller;</li>
                <li>Any breach of this Policy or the Terms of Service;</li>
                <li>Any intellectual property infringement claim related to the Seller's content;</li>
                <li>Any tax liability arising from Seller sales;</li>
                <li>Any false or misleading information provided by the Seller;</li>
                <li>Any dispute initiated by a Buyer as a result of Seller conduct.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. PLATFORM ENFORCEMENT RIGHTS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right at its sole and absolute discretion to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Delist any Product at any time, with or without notice;</li>
                <li>Suspend or permanently terminate Seller accounts;</li>
                <li>Withhold or claw back payouts for policy violations;</li>
                <li>Report Sellers to appropriate authorities where illegal activity is suspected;</li>
                <li>Share Seller account and transaction data with law enforcement, Stripe, or other payment processors as required;</li>
                <li>Issue warnings, restrictions, or service limitations as a graduated enforcement measure.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. ACCOUNT SUSPENSION AND TERMINATION</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.1 Grounds for Suspension</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">Immediate suspension may result from:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Any violation of this Policy or the Terms of Service;</li>
                <li>Excessive chargebacks or payment disputes;</li>
                <li>Listing prohibited content;</li>
                <li>Identity or payment fraud;</li>
                <li>Sanctions list match (OFAC or equivalent).</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.2 Effect on Buyers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Where a Seller account is terminated, <strong className="text-foreground">past buyers retain access</strong> to Products they purchased, unless removal is required by court order, law, payment processor action, or a sustained intellectual property complaint.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.3 Deactivation by Seller</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers may deactivate their accounts and delist their Products at any time. Pending payouts will be processed per Stripe's standard schedule. Seller obligations under this Policy (including indemnification) survive account termination.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">10. CONTACT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For seller inquiries: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a><br/>
                Outbrix US LLC — Sheridan, Wyoming, USA
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
