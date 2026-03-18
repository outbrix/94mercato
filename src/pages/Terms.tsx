import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — 94mercato</title>
        <meta
          name="description"
          content="Read the Terms of Service for 94mercato. Understand our platform rules, merchant of record status, liability terms, and governing law."
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
                By accessing or using the 94mercato platform ("Platform," "we," "us," or "our"), including through the website located at https://94mercato.com and any related services, you ("User," "you") agree to be legally bound by these Terms of Service ("Terms"), our Privacy Policy, Refund Policy, Acceptable Use Policy, and any other policies incorporated herein by reference.
              </p>

              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong className="text-foreground">Minimum Age Requirement:</strong> You must be at least 18 years of age to use the Platform. By creating an account, you represent and warrant that you are 18 or older.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. DEFINITIONS</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">"Platform"</strong> means the 94mercato website and associated services.</li>
                <li><strong className="text-foreground">"Outbrix" or "Company"</strong> means Outbrix US LLC, the operating entity.</li>
                <li><strong className="text-foreground">"Seller"</strong> means any user listing digital products.</li>
                <li><strong className="text-foreground">"Buyer"</strong> means any user purchasing digital products.</li>
                <li><strong className="text-foreground">"Product"</strong> means any digital asset listed for sale.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. COMPANY ROLE — PLATFORM AS INTERMEDIARY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                94mercato operates solely as a <strong className="text-foreground">digital marketplace intermediary</strong>. The Company does not create, own, inspect, warrant, or guarantee any Products listed by Sellers. The contractual relationship for any Product sale is exclusively between the Buyer and the Seller.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">Merchant of Record</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For payment processing purposes only, <strong className="text-foreground">Outbrix US LLC acts as the Merchant of Record ("MOR")</strong> for all transactions processed on the Platform. This means charges to Buyers will appear under "94mercato" or "Outbrix US LLC." Acting as MOR does not make Outbrix a party to the underlying product sale and does not transfer Seller liability to the Company.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. ACCOUNT REGISTRATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. The Company reserves the right to suspend or terminate accounts for violations of these Terms or fraudulent activity.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. SELLER TERMS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for the accuracy of their Listings. Sellers warrant that they own all necessary rights to list and sell the Product and that Products do not infringe any intellectual property rights.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for determining, collecting, reporting, and remitting all applicable taxes (VAT, GST, etc.) on their sales. The Company does not collect or remit taxes on behalf of Sellers.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. BUYER TERMS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Purchased Products are granted under a <strong className="text-foreground">limited, non-exclusive license</strong>. The default license is personal use only. Buyers may not resell, redistribute, or incorporate Products into goods sold to others unless the Seller's license explicitly permits it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Given the nature of digital goods, <strong className="text-foreground">all sales are final</strong> except as provided in the Refund & Cancellation Policy.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. GEOGRAPHIC RESTRICTIONS AND SANCTIONS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform is not available to users located in or acting on behalf of entities in restricted jurisdictions, including Afghanistan, Cuba, Iran, North Korea, Syria, Russia-occupied Crimea/Donetsk/Luhansk, and Pakistan (platform policy restriction).
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. LIMITATION OF LIABILITY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL OUTBRIX US LLC BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES. THE COMPANY'S TOTAL AGGREGATE LIABILITY SHALL NOT EXCEED THE AMOUNT PAID TO OR THROUGH THE PLATFORM IN THE PRECEDING TWELVE MONTHS.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. WARRANTY DISCLAIMER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                THE PLATFORM IS PROVIDED <strong className="text-foreground">"AS IS"</strong> WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. THE COMPANY DOES NOT WARRANT THAT PRODUCTS LISTED BY SELLERS WILL MEET YOUR EXPECTATIONS.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. DISPUTE RESOLUTION — BINDING ARBITRATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any dispute arising out of these Terms shall be resolved by <strong className="text-foreground">binding individual arbitration</strong> via the AAA in Wyoming, USA. You and Outbrix US LLC waive any right to bring or participate in a class action.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For legal inquiries: <a href="mailto:legal@94mercato.com" className="text-champagne">legal@94mercato.com</a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}