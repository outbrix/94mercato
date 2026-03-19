import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Cookie() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Cookie Policy for 94mercato. Discover how we use cookies, tracking technologies, and how to manage your cookie preferences."
        />
        <link rel="canonical" href="https://94mercato.com/cookie-policy" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Cookie Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
              <p className="text-muted-foreground mt-2">Operated by: Outbrix US LLC — Sheridan, Wyoming, USA</p>
              <p className="text-muted-foreground">Contact: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a></p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. WHAT ARE COOKIES?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files placed on your device (computer, tablet, or mobile) by websites you visit. They allow websites to recognize your device, remember your preferences, and collect usage data. Similar technologies include web beacons, pixels, local storage, and session storage.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. HOW WE USE COOKIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">94mercato uses cookies to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Keep you logged in between sessions</li>
                <li>Remember your cart and session state</li>
                <li>Prevent cross-site request forgery (CSRF)</li>
                <li>Analyze how the Platform is used to improve it</li>
                <li>Detect fraud and ensure platform security</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. COOKIE CATEGORIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We classify cookies into three categories:</p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.1 Essential Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are strictly necessary for the Platform to function. They cannot be disabled without impairing core features. No consent is required for essential cookies.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Cookie Name</th>
                      <th className="py-2 px-4 font-medium">Purpose</th>
                      <th className="py-2 pl-4 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>session_id</code></td>
                      <td className="py-2 px-4 align-top">Maintains your login session</td>
                      <td className="py-2 pl-4 align-top">Session</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>csrf_token</code></td>
                      <td className="py-2 px-4 align-top">Prevents cross-site request forgery</td>
                      <td className="py-2 pl-4 align-top">Session</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>auth_token</code></td>
                      <td className="py-2 px-4 align-top">Authenticates your account</td>
                      <td className="py-2 pl-4 align-top">30 days</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>cart_id</code></td>
                      <td className="py-2 px-4 align-top">Temporarily stores cart data</td>
                      <td className="py-2 pl-4 align-top">Session</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.2 Analytics Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies help us understand how visitors interact with the Platform, which pages are most visited, and where improvements can be made. We use <strong className="text-foreground">Google Analytics</strong> for this purpose.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Cookie Name</th>
                      <th className="py-2 px-4 font-medium">Provider</th>
                      <th className="py-2 px-4 font-medium">Purpose</th>
                      <th className="py-2 pl-4 font-medium">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>_ga</code></td>
                      <td className="py-2 px-4 align-top">Google LLC</td>
                      <td className="py-2 px-4 align-top">Identifies unique visitors</td>
                      <td className="py-2 pl-4 align-top">2 years</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>_gid</code></td>
                      <td className="py-2 px-4 align-top">Google LLC</td>
                      <td className="py-2 px-4 align-top">Distinguishes users per session</td>
                      <td className="py-2 pl-4 align-top">24 hours</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground"><code>_gat</code></td>
                      <td className="py-2 px-4 align-top">Google LLC</td>
                      <td className="py-2 px-4 align-top">Throttles request rate</td>
                      <td className="py-2 pl-4 align-top">1 minute</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">Important for EEA / UK Users:</strong> Analytics cookies are only placed on your device after you provide <strong className="text-foreground">explicit consent</strong> via our cookie consent banner. You may withdraw consent at any time.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Google Analytics data is transmitted to and processed by Google LLC in the United States. Google Analytics is configured with <strong className="text-foreground">IP anonymization enabled</strong> on this Platform.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For more information, see <a href="https://policies.google.com/privacy" className="text-champagne hover:underline" target="_blank" rel="noopener noreferrer">Google's Privacy Policy</a>.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">3.3 Marketing and Advertising Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong className="text-foreground">We currently do not use marketing or retargeting cookies or pixels</strong> (e.g., Meta Pixel, Google Ads Remarketing). If this changes, this policy will be updated and user consent will be obtained prior to any such cookies being set.
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Cookie Name</th>
                      <th className="py-2 px-4 font-medium">Purpose</th>
                      <th className="py-2 pl-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">None</td>
                      <td className="py-2 px-4 align-top">N/A</td>
                      <td className="py-2 pl-4 align-top">❌ Not in use</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. CONSENT MECHANISM</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.1 First Visit — Consent Banner</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                On your first visit to 94mercato, you will be presented with a <strong className="text-foreground">cookie consent banner</strong>. You may:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Accept all cookies</strong> (Essential + Analytics)</li>
                <li><strong className="text-foreground">Accept essential only</strong> (Essential cookies only)</li>
                <li><strong className="text-foreground">Manage preferences</strong> (granular per-category selection)</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.2 EEA / UK Users</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the European Economic Area or United Kingdom, <strong className="text-foreground">analytics cookies are not set</strong> until affirmative consent has been granted. This complies with the EU Cookie Directive (ePrivacy Directive) and UK Privacy and Electronic Communications Regulations (PECR).
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">4.3 Withdrawing Consent</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may change your cookie preferences at any time by clicking the <strong className="text-foreground">"Cookie Preferences"</strong> link in the website footer, or by clearing cookies in your browser settings.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. MANAGING COOKIES IN YOUR BROWSER</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and delete cookies directly via your browser. Instructions for major browsers:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Browser</th>
                      <th className="py-2 pl-4 font-medium">Cookie Settings</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Google Chrome</td>
                      <td className="py-2 pl-4 align-top">Settings → Privacy and Security → Cookies</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Mozilla Firefox</td>
                      <td className="py-2 pl-4 align-top">Settings → Privacy & Security → Cookies</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Safari</td>
                      <td className="py-2 pl-4 align-top">Preferences → Privacy → Manage Website Data</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Microsoft Edge</td>
                      <td className="py-2 pl-4 align-top">Settings → Privacy, Search & Services</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Note: Disabling essential cookies may prevent the Platform from functioning correctly.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. THIRD-PARTY COOKIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Third parties may set cookies on our Platform for analytics or service functionality:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Third Party</th>
                      <th className="py-2 px-4 font-medium">Purpose</th>
                      <th className="py-2 pl-4 font-medium">Policy Link</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Google LLC (Analytics)</td>
                      <td className="py-2 px-4 align-top">Website analytics</td>
                      <td className="py-2 pl-4 align-top"><a href="https://policies.google.com/privacy" className="text-champagne hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Stripe, Inc.</td>
                      <td className="py-2 px-4 align-top">Fraud detection, payment processing</td>
                      <td className="py-2 pl-4 align-top"><a href="https://stripe.com/privacy" className="text-champagne hover:underline" target="_blank" rel="noopener noreferrer">Stripe Privacy Policy</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not control third-party cookies. Please review their respective privacy policies for full details.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. DATA TRANSFERS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Data collected through analytics cookies may be transferred to the <strong className="text-foreground">United States</strong>. For EEA/UK users, this transfer is governed by the mechanisms described in our <strong className="text-foreground">Privacy Policy, Section 6</strong> (International Data Transfers).
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. UPDATES TO THIS POLICY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Cookie Policy as our cookie usage evolves. Material changes will be reflected by updating the "Effective Date" and, where required, prompting for renewed consent.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. CONTACT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about our cookie use: <a href="mailto:support@94mercato.com" className="text-champagne hover:underline">support@94mercato.com</a><br/>
                Outbrix US LLC — Sheridan, Wyoming, USA
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}