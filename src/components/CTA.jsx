import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="pricing" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-500/25 bg-gradient-to-tr from-emerald-500/10 to-emerald-500/5 p-10 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready to make data-driven decisions?</h3>
          <p className="mt-2 text-white/80">Start free. Connect WhatsApp and deploy your first agent in minutes.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-medium transition">
              Get a WhatsApp demo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
              View pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
