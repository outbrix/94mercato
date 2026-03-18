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
              <p className="text-muted-foreground mt-2">Operated by: Outbrix US LLC</p>
              <p className="text-muted-foreground">Registered Address: Sheridan, Wyoming, USA</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. ACCEPTANCE OF TERMS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using the 94mercato platform ("Platform," "we," "us," or "our"), including through the website located at <a href="https://94mercato.com" className="text-champagne hover:underline">https://94mercato.com</a> and any related services, you ("User," "you") agree to be legally bound by these Terms of Service ("Terms"), our Privacy Policy, Refund Policy, Acceptable Use Policy, and any other policies incorporated herein by reference (collectively, the "Agreement").
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you do not agree to these Terms in their entirety, you must immediately cease use of the Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Minimum Age Requirement:</strong> You must be at least 18 years of age to use the Platform. By creating an account, you represent and warrant that you are 18 or older. If we discover that a user is under 18, we will terminate their account immediately.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. DEFINITIONS</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">"Platform"</strong> means the 94mercato website, applications, and associated services.</li>
                <li><strong className="text-foreground">"Outbrix" or "Company"</strong> means Outbrix US LLC, the operating entity.</li>
                <li><strong className="text-foreground">"Seller"</strong> means any registered user who lists digital products for sale on the Platform.</li>
                <li><strong className="text-foreground">"Buyer"</strong> means any registered user who purchases digital products through the Platform.</li>
                <li><strong className="text-foreground">"Product"</strong> means any digital asset, file, template, course, code, UI kit, or other digital good listed by a Seller.</li>
                <li><strong className="text-foreground">"Listing"</strong> means a Seller's product page published on the Platform.</li>
                <li><strong className="text-foreground">"Transaction"</strong> means any completed purchase of a Product between a Buyer and a Seller, facilitated through the Platform.</li>
                <li><strong className="text-foreground">"Content"</strong> means any text, images, files, descriptions, or other material submitted to the Platform.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. COMPANY ROLE — PLATFORM AS INTERMEDIARY</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.1 Platform as Marketplace Only</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                94mercato operates solely as a <strong className="text-foreground">digital marketplace intermediary</strong>. The Company does not create, own, inspect (except for pre-publication review), warrant, or guarantee any Products listed by Sellers. The contractual relationship for any Product sale is <strong className="text-foreground">exclusively between the Buyer and the Seller</strong>.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.2 Merchant of Record</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For payment processing purposes only, <strong className="text-foreground">Outbrix US LLC acts as the Merchant of Record ("MOR")</strong> for all transactions processed on the Platform. This means charges to Buyers on their payment statements will appear under "94mercato" or "Outbrix US LLC." Acting as Merchant of Record is solely for payment processing and regulatory compliance purposes and does not make Outbrix a party to the underlying product sale, does not constitute an endorsement of any Seller or Product, and does not transfer Seller liability to the Company.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.3 No Seller Agency</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are <strong className="text-foreground">independent third parties</strong>, not employees, agents, partners, or representatives of Outbrix US LLC. The Company does not control how Sellers price, describe, deliver, support, or license their Products.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. ACCOUNT REGISTRATION</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.1 Account Creation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features, you must register and maintain an account. You agree to provide accurate, complete, and current information and to update it as necessary.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.2 Account Security</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are solely responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. You must notify us immediately at <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a> if you suspect unauthorized access.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.3 One Account Per User</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Each individual may maintain only one account. Operating multiple accounts to circumvent suspensions, gain unfair advantages, or obscure identity is prohibited and grounds for permanent termination.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.4 Account Suspension and Termination</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right, at its sole and absolute discretion, to suspend, restrict, or permanently terminate any account, with or without notice, for any reason including:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Violation of these Terms or any incorporated policy;</li>
                <li>Engagement in fraudulent, deceptive, or illegal activity;</li>
                <li>Chargebacks or payment disputes initiated in bad faith;</li>
                <li>Conduct that poses legal, financial, or reputational risk to the Platform.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Account termination does not entitle Users to any refund of commissions, fees, or pending payouts, except as required by law.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. SELLER TERMS</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.1 Seller Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any registered user may apply to be a Seller. Sellers acknowledge that the Company reserves the right to approve, restrict, or deny selling privileges at its sole discretion. Sellers must comply with the separate <strong className="text-foreground">Seller Policy</strong>, which is incorporated herein by reference.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.2 Product Listings</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for the accuracy, completeness, and legality of all Listings, including product descriptions, previews, pricing, and license terms. Sellers warrant that:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>They own or hold all necessary rights to list and sell the Product;</li>
                <li>The Product does not infringe any third-party intellectual property rights;</li>
                <li>The Product complies with all applicable laws and these Terms.</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.3 Pre-Publication Review</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All Products are subject to a <strong className="text-foreground">mandatory manual review</strong> by the Company before going live. Approval of a Listing does not constitute an endorsement of, or warranty regarding, the Product.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.4 Commission and Payouts</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers agree to the commission structure set forth in the <strong className="text-foreground">Seller Policy</strong> and Stripe Connect agreements. The Company processes payouts via Stripe. Payment timing and conditions are subject to Stripe's terms and the Seller Policy.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.5 Seller Taxes</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for determining, collecting, reporting, and remitting all applicable taxes (including VAT, GST, income tax, and withholding tax) on their sales. The Company does not collect or remit taxes on behalf of Sellers. Sellers indemnify and hold the Company harmless from any tax liability arising from their sales.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.6 Seller Indemnification</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers agree to indemnify, defend, and hold harmless Outbrix US LLC, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Any Product listed by the Seller;</li>
                <li>Any breach of these Terms or the Seller Policy;</li>
                <li>Any intellectual property infringement;</li>
                <li>Any tax liability arising from Seller sales.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. BUYER TERMS</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.1 Nature of Purchase</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When a Buyer completes a purchase, they are purchasing a <strong className="text-foreground">limited, non-exclusive license</strong> to use a digital Product, as defined by the license terms set by the Seller. No physical goods are delivered. No ownership of any intellectual property is transferred.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.2 Digital Goods — No Refunds by Default</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Given the instantaneous and irreversible nature of digital product delivery, <strong className="text-foreground">all sales are final</strong> except as provided in the Refund & Cancellation Policy. By completing a purchase, Buyers expressly acknowledge they understand and accept this policy.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.3 Download Responsibility</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Buyers are responsible for ensuring their systems are compatible with the Products they purchase. The Company makes no warranty regarding product compatibility, software requirements, or fitness for a particular purpose.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">6.4 License Grant</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Products purchased on the Platform are licensed, not sold. The default license is <strong className="text-foreground">personal use only</strong>, unless the Seller's product page expressly grants broader rights. Buyers may <strong className="text-foreground">not resell, redistribute, sublicense, or incorporate</strong> Products into goods they sell to others unless the Seller's license explicitly permits it.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. INTELLECTUAL PROPERTY</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">7.1 Platform IP</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All trademarks, logos, branding, interface designs, code, and content owned by Outbrix US LLC are protected by intellectual property law. No license to Platform IP is granted by these Terms.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">7.2 Seller IP</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers retain ownership of their Products. By listing a Product on the Platform, Sellers grant Outbrix US LLC a <strong className="text-foreground">non-exclusive, worldwide, royalty-free license</strong> to display, promote, and distribute the Product solely for the purpose of operating and marketing the Platform.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">7.3 DMCA Compliance</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company complies with the Digital Millennium Copyright Act (DMCA). If you believe content on the Platform infringes your copyright, please submit a DMCA takedown notice to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Email:</strong> <a href="mailto:legal@94mercato.com" className="text-champagne hover:underline">legal@94mercato.com</a></li>
                <li><strong className="text-foreground">Subject:</strong> DMCA Takedown Notice</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon receiving a valid notice, the Company will promptly investigate and, where appropriate, remove the infringing content.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. PROHIBITED CONDUCT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Users may not:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Use the Platform for any unlawful purpose;</li>
                <li>Circumvent, exploit, or interfere with payment systems;</li>
                <li>Submit false or misleading information;</li>
                <li>Impersonate another person or entity;</li>
                <li>Scrape, crawl, or harvest data from the Platform without authorization;</li>
                <li>Engage in any activity that disrupts or degrades the Platform's performance;</li>
                <li>List Products that violate applicable laws or third-party rights;</li>
                <li>Operate accounts in restricted jurisdictions (see Section 9).</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. GEOGRAPHIC RESTRICTIONS AND SANCTIONS COMPLIANCE</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.1 Restricted Jurisdictions</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform is not available to, and must not be used by, users located in or acting on behalf of persons or entities in the following restricted jurisdictions:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Afghanistan, Cuba, Iran, North Korea, Syria</li>
                <li>Russia-occupied Crimea, Donetsk People's Republic, and Luhansk People's Republic</li>
                <li>Pakistan *(platform policy restriction)*</li>
                <li>Any country, region, or individual subject to sanctions, embargoes, or restrictions imposed by the <strong className="text-foreground">U.S. Office of Foreign Assets Control (OFAC)</strong>, the <strong className="text-foreground">U.S. Department of Commerce's Bureau of Industry and Security (BIS)</strong>, or applicable <strong className="text-foreground">FATF high-risk jurisdiction</strong> designations</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.2 User Representation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using the Platform, you represent and warrant that you are not located in, incorporated in, or acting on behalf of any restricted jurisdiction, and that you are not on any U.S. government restricted or denied party list.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">9.3 Platform Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to block, suspend, or terminate access from any jurisdiction at its sole discretion, and to report suspicious activity as required by applicable law.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">10. LIMITATION OF LIABILITY</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.1 No Consequential Damages</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                <strong className="text-foreground">To the maximum extent permitted by applicable law, in no event shall Outbrix US LLC, its officers, directors, employees, agents, or licensors be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages</strong>, including without limitation lost profits, loss of data, loss of goodwill, business interruption, or cost of substitute goods, even if the Company has been advised of the possibility of such damages.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.2 Aggregate Cap</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                The Company's total aggregate liability to you for all claims arising out of or relating to these terms or the platform shall not exceed the greater of: (A) the amount you paid to or through the platform in the twelve (12) months preceding the claim, or (B) one hundred U.S. dollars (USD $100).
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.3 Basis of Bargain</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                You acknowledge that the foregoing limitations of liability are an essential element of the bargain between you and the company, without which we would not have entered into this agreement.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">11. WARRANTY DISCLAIMER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                The platform and all content, products, and services available through it are provided <strong className="text-foreground">"as is"</strong> and <strong className="text-foreground">"as available"</strong> without warranty of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, title, non-infringement, or uninterrupted/error-free service.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                The company does not warrant that any product listed by a seller will meet your expectations or requirements.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">12. INDEMNIFICATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless <strong className="text-foreground">Outbrix US LLC</strong> and its officers, directors, employees, agents, successors, and assigns from and against any and all claims, liabilities, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or related to:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Your use of the Platform;</li>
                <li>Your breach of these Terms;</li>
                <li>Your Content or Products;</li>
                <li>Your violation of any third-party rights;</li>
                <li>Your violation of any applicable law.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">13. DISPUTE RESOLUTION — BINDING ARBITRATION</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.1 Agreement to Arbitrate</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                Any dispute, claim, or controversy arising out of or relating to these terms or your use of the platform shall be resolved by <strong className="text-foreground">binding individual arbitration</strong>, not in court, except as set forth below.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.2 Arbitration Rules</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Arbitration shall be conducted by the <strong className="text-foreground">American Arbitration Association (AAA)</strong> under its Consumer Arbitration Rules, or such other rules as the parties agree. The arbitration shall take place in <strong className="text-foreground">Sheridan, Wyoming, USA</strong>, or via videoconference at the Company's election.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.3 Class Action Waiver</h3>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                <strong className="text-foreground">You and Outbrix US LLC expressly waive any right to bring or participate in a class action, class arbitration, collective action, or representative proceeding.</strong> All disputes must be brought in an individual capacity only.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.4 Opt-Out Right</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may opt out of this arbitration agreement by notifying us in writing within <strong className="text-foreground">30 days</strong> of first accepting these Terms, at <a href="mailto:legal@94mercato.com" className="text-champagne hover:underline">legal@94mercato.com</a>. Opting out does not affect any other provision of these Terms.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.5 Small Claims Exception</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Either party may bring an individual claim in small claims court if the claim qualifies under applicable rules, provided it remains an individual action.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.6 Governing Law</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the <strong className="text-foreground">laws of the State of Wyoming, USA</strong>, without regard to its conflict of law provisions.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">13.7 Severability of Arbitration Provision</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If any portion of this arbitration provision is found to be unenforceable or unlawful, that portion shall be severed, and the remaining provisions shall remain in full force and effect. If the class action waiver is found unenforceable, the entire arbitration agreement shall be null and void.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">14. MODIFICATIONS TO TERMS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company reserves the right to update or modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on the Platform with an updated "Effective Date." Your continued use of the Platform following notice constitutes acceptance of the revised Terms.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">15. TERMINATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company may suspend or terminate your access to the Platform at any time and for any reason. Upon termination, all licenses granted to you under these Terms will immediately cease. Sections 7 (IP), 10 (Liability), 11 (Warranties), 12 (Indemnification), and 13 (Arbitration) survive termination.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">16. MISCELLANEOUS</h2>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Entire Agreement:</strong> These Terms, together with all incorporated policies, constitute the entire agreement between you and the Company.</li>
                <li><strong className="text-foreground">Severability:</strong> If any provision is held invalid or unenforceable, the remaining provisions remain in full force.</li>
                <li><strong className="text-foreground">No Waiver:</strong> Failure to enforce any provision does not constitute a waiver of that right.</li>
                <li><strong className="text-foreground">Assignment:</strong> You may not assign your rights under these Terms. The Company may assign its rights without restriction.</li>
                <li><strong className="text-foreground">Force Majeure:</strong> The Company is not liable for failures or delays due to causes beyond its reasonable control.</li>
                <li><strong className="text-foreground">Contact:</strong> Outbrix US LLC — <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a> — Sheridan, Wyoming, USA</li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}