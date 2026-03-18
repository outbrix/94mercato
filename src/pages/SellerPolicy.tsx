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
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This Seller Policy applies to all Users of the 94mercato Platform who list, sell, or offer digital products as sellers ("Sellers"). By activating a seller account, you agree to be bound by these rules and accompanying platform terms.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. ELIGIBILITY AND ONBOARDING</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are required to connect a valid Stripe Connect account to receive payouts. Sellers must:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Provide accurate account configuration details;</li>
                <li>Be at least 18 years of age;</li>
                <li>Not operate from a restricted jurisdiction (Afghanistan, Cuba, Iran, North Korea, Syria, Crimea/Donetsk/Luhansk, and Pakistan);</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. PRODUCT LISTING STANDARDS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All Listings are subject to <strong className="text-foreground">mandatory manual review</strong> by the Company prior to publication. Sellers represent and warrant that:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>They hold all legal rights to license the Product;</li>
                <li>The Product does not violate copyright, trademark, or any intellectual property;</li>
                <li>Products are free of malware, spyware, and harmful code;</li>
                <li>AI-assisted generation is clearly disclosed where applicable.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. COMMISSION AND PAYOUTS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Commission on sales is deducted as follows:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Public Marketplace:</strong> 6%</li>
                <li><strong className="text-foreground">Invite-Only:</strong> 2%</li>
                <li><strong className="text-foreground">Subscribers:</strong> 3%</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Payments are automatically split via Stripe Connect minus platform commission. Sellers are solely responsible for determining, collecting, reporting, and remitting all applicable taxes (VAT, GST) arising from sales. The Company does not hold payout funds except where fraud or chargebacks are suspected.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. INDEMNIFICATION</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sellers agree to FULLY indemnify, defend, and hold harmless Outbrix US LLC and its directors from any claims, damages, liabilities, or losses arising from Product descriptions, tax obligations, or content complaints submitted against them.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For seller inquiries: <a href="mailto:support@94mercato.com" className="text-champagne">support@94mercato.com</a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
