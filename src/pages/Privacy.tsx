import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — 94mercato</title>
        <meta
          name="description"
          content="Read the Privacy Policy for 94mercato. Learn how we collect, use, and protect your personal data for our digital marketplace."
        />
        <link rel="canonical" href="https://94mercato.com/privacy" />
      </Helmet>
      <Layout>
        <section className="pt-24 md:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-stone/30 to-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto">
              <span className="text-xs tracking-widest uppercase text-champagne">Legal</span>
              <h1 className="heading-large text-3xl md:text-4xl mt-3 mb-4">Privacy Policy</h1>
              <p className="text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
              <p className="text-muted-foreground mt-2">Data Controller: Outbrix US LLC</p>
              <p className="text-muted-foreground">Registered Address: Sheridan, Wyoming, USA</p>
              <p className="text-muted-foreground">Contact: <a href="mailto:privacy@94mercato.com" className="text-champagne hover:underline">privacy@94mercato.com</a></p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="max-w-3xl mx-auto prose prose-invert">

              <h2 className="heading-medium text-2xl mt-12 mb-4">1. INTRODUCTION</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Privacy Policy explains how <strong className="text-foreground">Outbrix US LLC</strong> ("Company," "we," "us," or "our"), operator of the 94mercato platform ("Platform"), collects, uses, discloses, and protects personal data from users ("you") worldwide, including those in the <strong className="text-foreground">European Economic Area (EEA)</strong>, the <strong className="text-foreground">United Kingdom (UK)</strong>, and <strong className="text-foreground">California, USA</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By using the Platform, you acknowledge that you have read and understood this Privacy Policy. If you disagree with our practices, you should discontinue use of the Platform.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">2. DATA WE COLLECT</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.1 Information You Provide Directly</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Category</th>
                      <th className="py-2 pl-4 font-medium">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Account Data</td>
                      <td className="py-2 pl-4">Name, email address, username, password hash</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Profile Data</td>
                      <td className="py-2 pl-4">Bio, avatar, seller store description</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Transaction Data</td>
                      <td className="py-2 pl-4">Purchase history, product downloads, refund requests</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Payment Data</td>
                      <td className="py-2 pl-4">Billing name, card last 4 digits (via Stripe — we do not store full card numbers)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Seller Data</td>
                      <td className="py-2 pl-4">Payout details (processed by Stripe Connect), tax representations</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Communications</td>
                      <td className="py-2 pl-4">Support messages, dispute submissions, DMCA notices</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Content</td>
                      <td className="py-2 pl-4">Product listings, descriptions, preview files</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.2 Information Collected Automatically</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Category</th>
                      <th className="py-2 pl-4 font-medium">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Usage Data</td>
                      <td className="py-2 pl-4">Pages visited, clicks, session duration, search queries</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Device Data</td>
                      <td className="py-2 pl-4">Browser type/version, OS, IP address, device identifiers</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Log Data</td>
                      <td className="py-2 pl-4">Server logs, error reports, request timestamps</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Cookies & Trackers</td>
                      <td className="py-2 pl-4">See Section 7 (Cookie Policy) and our separate Cookie Policy</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">2.3 Information from Third Parties</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">We may receive data from:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Stripe:</strong> Payment status, account verification status, and fraud signals</li>
                <li><strong className="text-foreground">Google Analytics:</strong> Aggregated, anonymized usage data</li>
              </ul>

              <h2 className="heading-medium text-2xl mt-12 mb-4">3. LEGAL BASIS FOR PROCESSING (GDPR / UK GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For users in the EEA or UK, we process personal data under the following lawful bases:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Processing Activity</th>
                      <th className="py-2 pl-4 font-medium">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Creating and managing your account</td>
                      <td className="py-2 pl-4">Contract (Art. 6(1)(b) GDPR)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Processing purchases and payouts</td>
                      <td className="py-2 pl-4">Contract (Art. 6(1)(b) GDPR)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Fraud prevention and security</td>
                      <td className="py-2 pl-4">Legitimate Interests (Art. 6(1)(f) GDPR)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Legal compliance (OFAC, tax records)</td>
                      <td className="py-2 pl-4">Legal Obligation (Art. 6(1)(c) GDPR)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Analytics (Google Analytics)</td>
                      <td className="py-2 pl-4">Legitimate Interests (Art. 6(1)(f) GDPR)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Marketing communications</td>
                      <td className="py-2 pl-4">Consent (Art. 6(1)(a) GDPR) — where applicable</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Responding to disputes or legal claims</td>
                      <td className="py-2 pl-4">Legitimate Interests / Legal Obligation</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="heading-medium text-2xl mt-12 mb-4">4. HOW WE USE YOUR DATA</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We use collected data to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Create, maintain, and secure user accounts</li>
                <li>Process and fulfill product purchases and downloads</li>
                <li>Facilitate seller payouts via Stripe Connect</li>
                <li>Detect and prevent fraud, abuse, and policy violations</li>
                <li>Conduct pre-publication review of Seller listings</li>
                <li>Provide customer support</li>
                <li>Comply with legal obligations (OFAC sanctions screening, recordkeeping)</li>
                <li>Maintain and improve the Platform through analytics</li>
                <li>Send transactional emails (purchase confirmations, payout alerts, policy updates)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do <strong className="text-foreground">not</strong> sell your personal data to third parties. We do <strong className="text-foreground">not</strong> currently use your data for targeted advertising or retargeting.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">5. DATA SHARING AND DISCLOSURE</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">We share personal data only in the following circumstances:</p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.1 Service Providers (Sub-Processors)</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Processor</th>
                      <th className="py-2 px-4 font-medium">Purpose</th>
                      <th className="py-2 pl-4 font-medium">Data Shared</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Stripe, Inc.</td>
                      <td className="py-2 px-4 align-top">Payment processing, Stripe Connect payouts, fraud detection</td>
                      <td className="py-2 pl-4 align-top">Payment data, seller identity data</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Google LLC</td>
                      <td className="py-2 px-4 align-top">Analytics (Google Analytics)</td>
                      <td className="py-2 pl-4 align-top">Anonymized usage data, IP address</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">[Hosting Provider]</td>
                      <td className="py-2 px-4 align-top">Cloud infrastructure</td>
                      <td className="py-2 pl-4 align-top">All data stored on servers</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">All sub-processors are bound by data processing agreements and are required to maintain appropriate security measures.</p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.2 Legal Requirements</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may disclose personal data when required by law, regulation, court order, subpoena, or a government authority with jurisdiction over the Company, including OFAC compliance obligations.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.3 Business Transfers</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In the event of a merger, acquisition, asset sale, or reorganization, personal data may be transferred to the acquiring entity, subject to the same privacy protections.
              </p>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">5.4 With Your Consent</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share data for any other purpose with your explicit prior consent.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">6. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Company is based in the <strong className="text-foreground">United States</strong>. If you are located in the EEA, UK, or another jurisdiction with data transfer restrictions, your personal data may be transferred to and processed in the U.S., which may not provide the same level of data protection as your home jurisdiction.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We rely on the following mechanisms for international data transfers:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>The <strong className="text-foreground">EU–US Data Privacy Framework (DPF)</strong>, where applicable and where the recipient is certified under the DPF; and</li>
                <li><strong className="text-foreground">Standard Contractual Clauses (SCCs)</strong> approved by the European Commission for transfers to recipients not covered by an adequacy decision.</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We regularly review our data transfer mechanisms to ensure compliance with applicable data protection laws.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">7. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar technologies. See our separate <strong className="text-foreground">Cookie Policy</strong> for full detail. Summary:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Cookie Category</th>
                      <th className="py-2 px-4 font-medium">Examples</th>
                      <th className="py-2 pl-4 font-medium">Consent Required</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Essential</td>
                      <td className="py-2 px-4 align-top">Session cookies, login state, CSRF tokens</td>
                      <td className="py-2 pl-4 align-top">❌ No (necessary for service)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Analytics</td>
                      <td className="py-2 px-4 align-top">Google Analytics (_ga, _gid)</td>
                      <td className="py-2 pl-4 align-top">✅ Yes (EEA/UK users)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Marketing</td>
                      <td className="py-2 px-4 align-top">None currently used</td>
                      <td className="py-2 pl-4 align-top">N/A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                EEA and UK users will be presented with a cookie consent banner upon first visit. Analytics cookies are only placed following affirmative consent for EEA/UK users.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">8. DATA RETENTION</h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border text-foreground">
                      <th className="py-2 pr-4 font-medium">Data Type</th>
                      <th className="py-2 pl-4 font-medium">Retention Period</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground">
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Account data</td>
                      <td className="py-2 pl-4 align-top">Duration of account + 3 years after deletion</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Transaction records</td>
                      <td className="py-2 pl-4 align-top">7 years (tax/legal compliance)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Support communications</td>
                      <td className="py-2 pl-4 align-top">3 years</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Analytics data</td>
                      <td className="py-2 pl-4 align-top">26 months (Google Analytics default, adjusted to minimum)</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-2 pr-4 align-top font-medium text-foreground">Log data</td>
                      <td className="py-2 pl-4 align-top">90 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain certain data longer where required by law or to enforce legal rights.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">9. DATA SECURITY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement commercially reasonable technical and organizational measures to protect personal data against unauthorized access, disclosure, alteration, and destruction. These include:
              </p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>TLS/SSL encryption in transit</li>
                <li>Password hashing (bcrypt or equivalent)</li>
                <li>Role-based access controls</li>
                <li>Regular security reviews</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                However, <strong className="text-foreground">no method of transmission over the Internet is 100% secure</strong>. You use the Platform at your own risk.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">10. YOUR PRIVACY RIGHTS</h2>
              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.1 All Users</h3>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Right to access your account information</li>
                <li>Right to update or correct inaccurate data</li>
                <li>Right to delete your account (subject to legal retention obligations)</li>
                <li>Right to opt out of marketing communications at any time</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.2 EEA / UK Users (GDPR / UK GDPR)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">In addition to the above:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li><strong className="text-foreground">Right of Access</strong> (Art. 15) — obtain a copy of your personal data</li>
                <li><strong className="text-foreground">Right to Rectification</strong> (Art. 16) — correct inaccurate data</li>
                <li><strong className="text-foreground">Right to Erasure</strong> (Art. 17) — request deletion ("right to be forgotten")</li>
                <li><strong className="text-foreground">Right to Restrict Processing</strong> (Art. 18)</li>
                <li><strong className="text-foreground">Right to Data Portability</strong> (Art. 20)</li>
                <li><strong className="text-foreground">Right to Object</strong> (Art. 21) — object to processing based on legitimate interests</li>
                <li><strong className="text-foreground">Right to Withdraw Consent</strong> — at any time, without affecting prior lawful processing</li>
                <li><strong className="text-foreground">Right to Lodge a Complaint</strong> with your local supervisory authority (e.g., ICO in the UK, DPA in EU)</li>
              </ul>

              <h3 className="font-serif text-lg font-medium text-foreground mt-8 mb-3">10.3 California Residents (CCPA / CPRA)</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">California residents have the right to:</p>
              <ul className="space-y-2 text-muted-foreground list-disc pl-6 mb-4">
                <li>Know what personal information is collected and how it is used</li>
                <li>Request deletion of personal information</li>
                <li>Opt out of the "sale" of personal information (we do not sell personal data)</li>
                <li>Non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To exercise your rights, contact us at: <a href="mailto:privacy@94mercato.com" className="text-champagne hover:underline">privacy@94mercato.com</a>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We will respond to verified requests within <strong className="text-foreground">30 days</strong> (GDPR) or <strong className="text-foreground">45 days</strong> (CCPA).
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">11. CHILDREN'S PRIVACY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The Platform is intended for users who are <strong className="text-foreground">at least 18 years old</strong>. We do not knowingly collect personal data from minors. If we discover that we have collected data from a user under 18, we will delete it immediately. If you believe a minor has registered, please contact <a href="mailto:privacy@94mercato.com" className="text-champagne hover:underline">privacy@94mercato.com</a>.
              </p>

              <h2 className="heading-medium text-2xl mt-12 mb-4">12. CHANGES TO THIS POLICY</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on the Platform with a revised "Effective Date." Continued use of the Platform after such notice constitutes acceptance.
              </p>

            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}