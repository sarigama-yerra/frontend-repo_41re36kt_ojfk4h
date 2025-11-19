import { Check, Leaf, MessageCircle } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$0",
      cadence: "/mo",
      highlight: "For small teams validating workflows",
      features: [
        "1 AI agent",
        "WhatsApp integration",
        "200 conversations/mo",
        "Basic analytics",
      ],
      cta: { label: "Start free", href: "#" },
      accent: false,
    },
    {
      name: "Pro",
      price: "$79",
      cadence: "/mo",
      highlight: "Best for growing operations",
      features: [
        "Up to 5 AI agents",
        "Advanced routing",
        "5,000 conversations/mo",
        "Data export + webhooks",
      ],
      cta: { label: "Talk to sales", href: "https://wa.me/15551234567" },
      accent: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "",
      highlight: "For large farms and co-ops",
      features: [
        "Unlimited agents",
        "SLA + SSO",
        "On-prem options",
        "Priority support",
      ],
      cta: { label: "Contact us", href: "https://wa.me/15551234567" },
      accent: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-emerald-300/80">
            <Leaf className="h-4 w-4" />
            <span className="text-xs uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Simple, green-forward pricing</h2>
          <p className="mt-2 text-white/75">No clutter. Clear limits. Everything focused on turning field data into actions.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-xl border p-6 lg:p-7 transition-colors ${
                t.accent
                  ? "border-emerald-400/30 bg-emerald-500/5"
                  : "border-white/10 bg-white/0"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-white font-medium">{t.name}</h3>
                {t.accent && (
                  <span className="text-emerald-300/90 text-xs">Most popular</span>
                )}
              </div>
              <p className="mt-1 text-sm text-white/70">{t.highlight}</p>

              <div className="mt-6 flex items-end gap-1">
                <span className={`text-4xl font-semibold ${t.accent ? "text-emerald-300" : "text-white"}`}>{t.price}</span>
                {t.cadence && <span className="text-white/60 mb-1">{t.cadence}</span>}
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href={t.cta.href}
                  target={t.cta.href.startsWith("http") ? "_blank" : undefined}
                  rel={t.cta.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 font-medium transition ${
                    t.accent
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  {t.cta.label}
                  {t.cta.href.includes("wa.me") && <MessageCircle className="h-4 w-4" />}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/50">All plans include secure data handling and sustainable defaults. Cancel anytime.</p>
      </div>
    </section>
  );
}
