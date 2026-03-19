import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function License() {
  return (
    <>
      <Helmet>
        <title>License Agreement — 94mercato</title>
        <meta
          name="description"
          content="Read out Digital Product License Agreement. Understand the rules concerning personal use, commercial use, AI restrictions, and redistribution limits on purchased files."
        />
        <link rel="canonical" href="https://94mercato.com/license" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">License Agreement</h1>
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
                This Digital Product License Agreement ("License Agreement") governs all purchases of digital products ("Products") on the 94mercato Platform, operated by Outbrix US LLC. By completing a purchase, you ("Licensee") agree to be bound by this License Agreement and any additional license terms specified on the applicable product page.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event of a conflict between this License Agreement and any Seller-specified license terms on the product page, <strong className="text-foreground">the Seller's explicitly stated terms govern</strong>, provided they do not violate these Terms or applicable law.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. GRANT OF LICENSE</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.1 No Ownership Transfer</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All purchases on 94mercato are <strong className="text-foreground">licenses, not sales</strong>. Purchasing a Product does not transfer title, ownership, or intellectual property rights to the Licensee. The Seller retains full ownership of the Product and all intellectual property embodied therein.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.2 Default License — Personal Use Only</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless the Seller's product page explicitly states a broader license, every Product sold on 94mercato is licensed under the following default terms:
              </p>
              <p className="text-foreground font-medium mb-3">Default Personal Use License:</p>
              <ul className="space-y-2 text-muted-foreground list-none pl-6 mb-4">
                <li>✅ You may use the Product for <strong className="text-foreground">personal, non-commercial projects</strong></li>
                <li>✅ You may modify the Product for your own personal use</li>
                <li>❌ You may NOT use the Product in commercial projects (client work, paid services, revenue-generating applications)</li>
                <li>❌ You may NOT resell, redistribute, sublicense, share, or transfer the Product</li>
                <li>❌ You may NOT incorporate the Product into goods or assets you sell to others</li>
                <li>❌ You may NOT make the Product publicly available for download, including on other marketplaces</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.3 Commercial License</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the Seller explicitly grants a <strong className="text-foreground">commercial license</strong> on the product page, the Licensee may:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Use the Product in commercial projects (client work, paid services)</li>
                <li>Modify the Product for commercial use</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless expressly stated otherwise, commercial licenses do <strong className="text-foreground">not</strong> include the right to resell or redistribute the Product.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.4 Extended / Resale License</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A right to <strong className="text-foreground">resell, sublicense, or incorporate</strong> Products into goods sold to others is only granted where the Seller <strong className="text-foreground">explicitly</strong> states a resale or extended license. Such licenses are granted on a per-Product, per-transaction basis.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. RESTRICTIONS — ALL LICENSE TYPES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Regardless of license type, the following restrictions apply to all Licensees at all times:
              </p>
              <ol className="space-y-2 text-muted-foreground list-decimal pl-6 mb-4">
                <li><strong className="text-foreground">No Redistribution:</strong> You may not share, upload, resell, or distribute any Product (in original or modified form) to any third party without the Seller's express written permission.</li>
                <li><strong className="text-foreground">No Marketplace Listing:</strong> You may not list or sell a purchased Product on any other digital marketplace, including but not limited to Etsy, Creative Market, Envato, or similar platforms.</li>
                <li><strong className="text-foreground">No Reverse Engineering:</strong> You may not reverse engineer, decompile, or otherwise attempt to extract source materials in ways not intended by the Seller, where technically protected.</li>
                <li><strong className="text-foreground">No Deceptive Attribution:</strong> You may not misrepresent the origin of a Product, claim authorship, or remove embedded attribution markers.</li>
                <li><strong className="text-foreground">No Illegal Use:</strong> You may not use Products for any unlawful purpose, including creating fraudulent or harmful content.</li>
                <li><strong className="text-foreground">One Licensee:</strong> Licenses are granted to the individual purchaser only and may not be shared, transferred, or assigned to another person or entity without the Seller's written consent.</li>
              </ol>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. ARTIFICIAL INTELLIGENCE (AI) AND GENERATED CONTENT</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.1 AI-Generated Products</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Products that are AI-generated or AI-assisted are <strong className="text-foreground">permitted</strong> on 94mercato, provided they comply with applicable laws, third-party rights, and platform policies. Sellers must disclose whether a product is AI-generated in the product description.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.2 Use of Products to Train AI</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless the Seller explicitly grants permission in writing, Licensees may <strong className="text-foreground">not</strong> use purchased Products (including images, code, templates, or datasets) to train, fine-tune, or develop artificial intelligence or machine learning models.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may not use any Product, in whole or in part, to create datasets, embeddings, or derivative databases intended for use in artificial intelligence, machine learning, or similar technologies, whether for commercial or non-commercial purposes.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.3 AI Output Liability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sellers are solely responsible for ensuring that AI-generated Products do not infringe any third-party intellectual property rights. The Company makes no representations or warranties regarding the legality, ownership, or originality of AI-generated content.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. INTELLECTUAL PROPERTY PROTECTION</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.1 Seller IP Rights</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All intellectual property rights in a Product remain the exclusive property of the Seller (or their licensors). Nothing in this License Agreement transfers any IP rights to the Licensee.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.2 Platform IP</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The 94mercato Platform, branding, and associated materials are the exclusive property of Outbrix US LLC.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.3 Report of Infringement</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To report intellectual property infringement: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a> — include the subject line "DMCA Notice."
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. WARRANTY DISCLAIMER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                <strong className="text-foreground">Products are provided "as is" and "as available."</strong> Neither Outbrix US LLC nor any seller makes any warranty, express or implied, including warranties of fitness for a particular purpose, merchantability, accuracy, or non-infringement.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                The company does not warrant that products will meet your specific needs, be bug-free, or work with any particular software or platform.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. LIMITATION OF LIABILITY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4 uppercase">
                <strong className="text-foreground">To the maximum extent permitted by applicable law, neither Outbrix US LLC nor any seller shall be liable to the licensee for any indirect, incidental, consequential, punitive, or special damages arising from the use or inability to use a product, even if advised of the possibility of such damages.</strong>
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. LICENSE TERMINATION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This license terminates automatically if you:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Breach any provision of this License Agreement;</li>
                <li>Violate any applicable Terms of Service;</li>
                <li>Engage in unauthorized redistribution or resale.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Upon termination, you must immediately cease all use of the Product and destroy all copies in your possession. Outbrix US LLC and/or the Seller may pursue all available legal remedies for breaches.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. GOVERNING LAW</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This License Agreement is governed by the <strong className="text-foreground">laws of the State of Wyoming, USA</strong>, without regard to conflict-of-law principles.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">10. CONTACT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For licensing inquiries: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a><br/>
                Outbrix US LLC — Sheridan, Wyoming, USA
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
