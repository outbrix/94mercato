import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, MessageSquare, HelpCircle, Send, Loader2, CheckCircle, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const channels = [
  {
    icon: HelpCircle,
    label: "Support",
    description: "Account issues, bugs, and refunds.",
    email: "support@94mercato.com",
    accent: "sapphire",
  },
  {
    icon: MessageSquare,
    label: "Sellers",
    description: "Commission, payouts, and partnerships.",
    email: "support@94mercato.com",
    accent: "champagne",
  },
  {
    icon: Mail,
    label: "Press",
    description: "Media inquiries and press kits.",
    email: "support@94mercato.com",
    accent: "cream",
  },
];

// ─── Main page ──────────────────────────────────────────────────────
const Contact = () => {
  const heading = "GET IN TOUCH";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(formData.message)}`;
    const mailtoLink = `mailto:support@94mercato.com?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;

    await new Promise((resolve) => setTimeout(resolve, 500));
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Opening your email client...", {
      description: "Your message has been prepared. Please send it from your email app.",
    });

    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Contact — 94mercato</title>
        <meta
          name="description"
          content="Get in touch with 94mercato. Contact our support team, sales, or press departments."
        />
      </Helmet>

      <Layout>
        {/* ─── HERO: Dark Midnight ──────────────────────────── */}
        <section className="relative min-h-[50vh] overflow-hidden bg-midnight flex items-center justify-center py-24 md:py-32">
          {/* Ambient glow */}
          <div className="absolute inset-0">
            <div className="absolute top-[-20%] right-[-10%] w-[40vw] h-[40vh] bg-sapphire/12 rounded-full blur-[160px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[35vw] h-[35vh] bg-champagne/6 rounded-full blur-[140px]" />
          </div>

          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="text-xs tracking-[0.35em] uppercase text-champagne/60 mb-6 font-medium">
              Say Hello
            </p>
            <h1
              className="font-mono text-[clamp(2rem,8vw,5rem)] font-black text-cream leading-[0.9] tracking-tighter mb-6"
              style={{ textShadow: "0 0 80px rgba(201,168,76,0.15)" }}
            >
              {heading}
            </h1>
            <p className="text-cream/35 text-lg font-light max-w-md mx-auto">
              Questions, partnerships, or just want to say hi.
              <br />
              We're here.
            </p>
          </div>
        </section>

        {/* ─── CHANNELS ────────────────────────────────────── */}
        <section className="bg-midnight py-16 md:py-20 border-t border-cream/5">
          <div className="container-luxury">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {channels.map((ch) => (
                <a
                  key={ch.label}
                  href={`mailto:${ch.email}`}
                  className="group relative p-8 rounded-2xl border border-cream/8 hover:border-cream/20 bg-cream/[0.02] hover:bg-cream/[0.04] transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl border border-cream/10 flex items-center justify-center mb-6 group-hover:border-champagne/30 transition-colors">
                    <ch.icon className="h-5 w-5 text-cream/40 group-hover:text-champagne transition-colors" />
                  </div>

                  <h3 className="font-mono text-lg font-bold text-cream tracking-tight mb-2 group-hover:text-champagne transition-colors">
                    {ch.label}
                  </h3>
                  <p className="text-cream/30 text-sm leading-relaxed mb-4">
                    {ch.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs tracking-[0.15em] uppercase text-champagne/50 group-hover:text-champagne transition-colors">
                    {ch.email}
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CONTACT FORM ────────────────────────────────── */}
        <section className="bg-midnight py-20 md:py-28 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-1/2 h-full"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
            }}
          />

          <div className="container-luxury relative z-10">
            <div className="max-w-2xl mx-auto">
              <p className="text-xs tracking-[0.35em] uppercase text-champagne/60 mb-4 font-medium">
                Send a Message
              </p>
              <h2
                className="font-mono text-3xl md:text-4xl font-black text-cream leading-[1.1] tracking-tighter mb-12"
                style={{ textShadow: "0 0 60px rgba(201,168,76,0.1)" }}
              >
                Write to Us
              </h2>

              <div className="p-8 md:p-10 rounded-2xl border border-cream/8 bg-cream/[0.02]">
                {isSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-green-500/20 bg-green-500/5 flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-cream mb-2">
                      Message Prepared
                    </h3>
                    <p className="text-cream/40 text-sm">
                      Your email client should open with your message.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 font-medium"
                        >
                          Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                          maxLength={50}
                          className="w-full bg-transparent border-b border-cream/15 focus:border-champagne/50 text-cream placeholder:text-cream/20 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 font-medium"
                        >
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          disabled={isSubmitting}
                          maxLength={100}
                          className="w-full bg-transparent border-b border-cream/15 focus:border-champagne/50 text-cream placeholder:text-cream/20 py-3 text-sm outline-none transition-colors"
                        />
                      </div>
                    </div>

                      <div className="flex justify-between">
                        <label
                          htmlFor="contact-subject"
                          className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 font-medium"
                        >
                          Subject
                        </label>
                        <span className="text-[10px] text-cream/20">{formData.subject.length}/100</span>
                      </div>
                      <input
                        id="contact-subject"
                        type="text"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={(e) =>
                          setFormData({ ...formData, subject: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        maxLength={100}
                        className="w-full bg-transparent border-b border-cream/15 focus:border-champagne/50 text-cream placeholder:text-cream/20 py-3 text-sm outline-none transition-colors"
                      />

                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="contact-message"
                          className="block text-xs tracking-[0.2em] uppercase text-cream/40 mb-3 font-medium"
                        >
                          Message
                        </label>
                        <span className="text-[10px] text-cream/20">{formData.message.length}/2000</span>
                      </div>
                      <textarea
                        id="contact-message"
                        placeholder="Tell us more..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        disabled={isSubmitting}
                        maxLength={2000}
                        className="w-full bg-transparent border-b border-cream/15 focus:border-champagne/50 text-cream placeholder:text-cream/20 py-3 text-sm outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-champagne text-midnight font-bold text-sm tracking-[0.15em] uppercase rounded-full overflow-hidden transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin relative z-10" />
                          <span className="relative z-10">Preparing...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 relative z-10" />
                          <span className="relative z-10">Send Message</span>
                        </>
                      )}
                      <div className="absolute inset-0 bg-cream opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ TEASER ──────────────────────────────────── */}
        <section className="bg-midnight py-16 border-t border-cream/5">
          <div className="container-luxury text-center">
            <p className="text-cream/30 text-sm mb-4">
              Looking for quick answers?
            </p>
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 px-8 py-3 border border-cream/15 text-cream/60 font-medium text-sm tracking-[0.15em] uppercase rounded-full hover:border-cream/30 hover:text-cream transition-all"
            >
              View FAQ
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
