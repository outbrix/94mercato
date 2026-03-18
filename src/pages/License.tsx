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
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                This Digital Product License Agreement ("License Agreement") governs all purchases of digital products ("Products") on the 94mercato Platform. All purchases are licenses, not sales. Purchasing a Product does not transfer title, ownership, or intellectual property rights to the Buyer.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. DEFAULT LICENSE — PERSONAL USE ONLY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unless the Seller's product page explicitly states a broader license, every Product sold on 94mercato is licensed under the following default terms:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Personal Projects:</strong> You may use the Product for non-commercial projects.</li>
                <li><strong className="text-foreground">No Resale/Redistribution:</strong> You may not share, resell, or transfer the Product to any third party.</li>
                <li><strong className="text-foreground">No Sublicensing:</strong> You may not incorporate the Product into goods or assets you sell to others.</li>
                <li><strong className="text-foreground">No Public Downloads:</strong> You may not make the Product publicly available for download on other marketplaces.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. COMMERCIAL & EXTENDED LICENSES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the Seller explicitly grants a <strong className="text-foreground">commercial license</strong> on the product page, you may use the Product in client work, paid services, and revenue-generating applications. Unless explicitly approved by the Seller, commercial licenses do not grant rights to resell or redistribute the original source files.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. AI-GENERATED CONTENT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Products that are AI-generated or AI-assisted are permitted on 94mercato, provided they comply with applicable laws and do not infringe third-party rights. Sellers must disclose this status in descriptions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">AI Training Prohibition:</strong> Unless granted express permission, buyers may not use purchased Products to train, fine-tune, or develop artificial intelligence or machine learning models.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. LICENSE TERMINATION</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your license terminates automatically if you breach any provision of this agreement, engage in unauthorized redistribution, or violate platform policies. Upon termination, you must cease all use of the Product and destroy all copies.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">Contact</h2>
              <p className="text-muted-foreground leading-relaxed">
                For licensing inquiries: <a href="mailto:support@94mercato.com" className="text-champagne">support@94mercato.com</a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
