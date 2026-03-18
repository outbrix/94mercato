import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Cookie() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Cookie Policy for 94mercato. Learn how we use essential and analytics cookies to deliver page weight optimization and correct feature updates."
        />
        <link rel="canonical" href="https://94mercato.com/cookie" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-muted-foreground text-lg leading-relaxed">
                94mercato uses cookies to analyze traffic and provide authentication state persistence. Cookies are small text files placed on your device inside your browser framework.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. ESSENTIAL COOKIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are strictly necessary for the core Platform to function securely. Disabling them will break core features (e.g., login memory, cart session). No prior consent is required for these items.
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6">
                <li><strong className="text-foreground">Session ID:</strong> Keeps you logged in or tracks guest cart state.</li>
                <li><strong className="text-foreground">CSRF Token:</strong> Prevents Cross-Site Request Forgery hacks.</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. ANALYTICS COOKIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use <strong className="text-foreground">Google Analytics</strong> to provide reporting on high-level traffic (browser type, duration, search queries). Google Analytics data is filtered using IP anonymization.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For users in the EEA/UK, analytical cookies are <strong className="text-foreground">disabled by default</strong> unless explicit approval is selected on the site banner upon first navigation load.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. MARKETING & ADVERTISING</h2>
              <p className="text-muted-foreground leading-relaxed">
                We <strong className="text-foreground">do not currently set marketing or retargeting cookies</strong> (such as Meta Pixel). If our advertising mechanics fluctuate, this policy will update and ask for consent prior to setting code scripts.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. MANAGING COOKIES</h2>
              <p className="text-muted-foreground leading-relaxed">
                You can configure and delete cookies directly inside your browser settings (Chrome, Safari, Firefox). Disabling consent triggers can be updated using the "Manage Preferences" button which can be surfaced at the footer.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}