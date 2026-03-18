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
              <p className="text-muted-foreground mt-2">Operated by: Outbrix US LLC — Sheridan, Wyoming, USA</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. PURPOSE</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Acceptable Use Policy ("AUP") defines conduct that is prohibited on the 94mercato Platform. It applies to all Users, including Buyers, Sellers, and visitors. Violations may result in immediate account suspension, termination, and legal action.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The AUP is incorporated into and must be read alongside the Terms of Service.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. PROHIBITED CONDUCT — GENERAL</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Users may not use the Platform to:</p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.1 Illegal Activity</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Violate any applicable local, national, or international law or regulation;</li>
                <li>Engage in money laundering, fraud, identity theft, or financial crimes;</li>
                <li>Circumvent OFAC sanctions, export controls, or payment processor restrictions;</li>
                <li>Facilitate, enable, or assist in the commission of any criminal offense.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.2 Harmful or Deceptive Behavior</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Impersonate any person, entity, or brand — including 94mercato or Outbrix — through account names, descriptions, or communications;</li>
                <li>Provide false, misleading, or inaccurate information in account registration, product listings, or communications;</li>
                <li>Manipulate reviews, ratings, or any feedback mechanism;</li>
                <li>Use fake accounts, bots, or automation to inflate metrics, generate fraudulent sales, or deceive other users.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.3 Platform Abuse</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Scrape, crawl, spider, or extract data from the Platform using automated tools without express written permission;</li>
                <li>Probe, scan, or test the vulnerability of the Platform's systems or networks;</li>
                <li>Introduce viruses, trojans, worms, malware, ransomware, or any harmful code;</li>
                <li>Interfere with or disrupt the integrity, availability, or performance of the Platform;</li>
                <li>Circumvent any access controls, authentication systems, or enforcement mechanisms;</li>
                <li>Conduct denial-of-service (DoS/DDoS) attacks or resource exhaustion attacks.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.4 Payment and Financial Fraud</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Submit fraudulent purchase or refund requests;</li>
                <li>Initiate chargebacks in bad faith or as a deliberate mechanism to obtain Products without payment;</li>
                <li>Use stolen or unauthorized payment credentials;</li>
                <li>Attempt to exploit or manipulate the commission or payout system.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.5 Intellectual Property Violations</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Upload, list, or distribute Products that infringe any third-party copyright, trademark, patent, or trade secret;</li>
                <li>Circumvent any digital rights management (DRM) or copy protection;</li>
                <li>Use Products outside the scope of the applicable license;</li>
                <li>Repost or redistribute purchased Products without authorization.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.6 Prohibited Content</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>List, upload, or distribute adult, pornographic, or sexually explicit content of any kind;</li>
                <li>Distribute hate speech, discriminatory content, or material that incites violence;</li>
                <li>List products that could be used for harassment, stalking, or targeting of individuals;</li>
                <li>Distribute harmful or illegal software, exploits, phishing kits, or credential-harvesting tools.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.7 Sanctions and Geographic Violations</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Access or use the Platform from a restricted jurisdiction (see Terms of Service, Section 9);</li>
                <li>Transact with any party on a U.S. government denied-party, restricted-party, or sanctions list.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. SELLER-SPECIFIC PROHIBITED CONDUCT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">In addition to the general prohibitions above, Sellers may not:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>List Products they do not own or have no legitimate right to sell;</li>
                <li>Misrepresent a product's features, capabilities, or license terms;</li>
                <li>Fail to disclose AI-generated content;</li>
                <li>Contact Buyers outside the Platform to circumvent Platform fees;</li>
                <li>List duplicate or substantially similar Products to inflate store metrics.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. ENFORCEMENT</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.1 Platform Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">The Company reserves the right, at its sole discretion and without prior notice, to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Issue formal warnings to Users;</li>
                <li>Temporarily or permanently restrict or suspend account functionality;</li>
                <li>Remove or delist any Product or Content;</li>
                <li>Hold, delay, or withhold payouts pending investigation;</li>
                <li>Permanently terminate Accounts;</li>
                <li>Report unlawful conduct to applicable law enforcement authorities;</li>
                <li>Cooperate with legal investigations, subpoenas, or court orders.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.2 No Obligation to Monitor</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company is not obligated to actively monitor all User activity on the Platform. However, the Company may investigate any reported or suspected violation at its discretion.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.3 Reporting Violations</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To report a suspected AUP violation:<br/>
                <strong className="text-foreground">Email:</strong> <a href="mailto:abuse@94mercato.com" className="text-champagne hover:underline">abuse@94mercato.com</a><br/>
                <strong className="text-foreground">Subject Line:</strong> AUP Violation Report
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. CONSEQUENCES OF VIOLATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Violations of this AUP may result in:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Loss of access to the Platform;</li>
                <li>Forfeiture of pending payouts (where applicable);</li>
                <li>Legal action for damages;</li>
                <li>Reporting to law enforcement and payment processors.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. GOVERNING LAW</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This AUP is governed by the <strong className="text-foreground">laws of the State of Wyoming, USA</strong>.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. CONTACT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For AUP-related matters: <a href="mailto:abuse@94mercato.com" className="text-champagne hover:underline">abuse@94mercato.com</a><br/>
                Outbrix US LLC — Sheridan, Wyoming, USA
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
