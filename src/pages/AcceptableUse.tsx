import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function AcceptableUse() {
  return (
    <>
      <Helmet>
        <title>Acceptable Use Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Acceptable Use Policy for 94mercato. Understand prohibited activities, fraud prevention, safety guidelines, and enforcement mechanics."
        />
        <link rel="canonical" href="https://94mercato.com/acceptable-use" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Acceptable Use Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This Acceptable Use Policy ("AUP") defines prohibited conduct on the 94mercato Platform. Violations may result in immediate account suspension, access restrictions, or permanent withholding of payout funds.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. ILLEGAL & DECEPTIVE ACTIVITY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Users may not use the Platform for:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Money laundering, identity theft, or financial crimes;</li>
                <li>Impersonating trademarks, entities, or brands;</li>
                <li>Falsifying review headers, bots, or artificial inflating metrics;</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. PLATFORM ABUSE</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Users may not scrape, crawl, or spider the page frame without prior written permission. Conduct thatprobe, scan, or trigger resource exhaustion includes:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Deploying viruses, trojans, backdoors, or credential harvesting code;</li>
                <li>Deploying DoS or DDoS triggers to saturate server pipelines;</li>
                <li>Modifying client nodes to bypass standard authentication workflows;</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. PAYMENT FRAUD</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Users may not submit bad faith chargebacks, malicious duplicate orders, or utilize stolen card metrics. Attempting to bypass split commission tables is rigorously monitored and enforced.</p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. PROHIBITED CONTENT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Sellers may not list:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li>Adult, sexually explicit, or pornographic material;</li>
                <li>Products facilitating harassment or stalking;</li>
                <li>Incomplete, broken, or scraped source files from third parties;</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. ENFORCEMENT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4"> Submitting false data triggers immediate remediation. The Company holds standard operation rights to issue warnings, restrict dashboard uploading, or report suspicious metadata to law enforcement/Stripe as required.</p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                To report abuse: <a href="mailto:support@94mercato.com" className="text-champagne">support@94mercato.com</a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
