import { Leaf, LineChart, PlugZap, Bot, Database, MessageCircle } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: <Bot className="h-5 w-5" />, 
      title: 'Autonomous AI agents',
      desc: 'Deploy crop-specific agents to answer farmers, log issues and orchestrate tasks.'
    },
    {
      icon: <MessageCircle className="h-5 w-5" />, 
      title: 'WhatsApp-first workflows',
      desc: 'Onboard teams where they already work. No downloads, no friction.'
    },
    {
      icon: <Database className="h-5 w-5" />, 
      title: 'Unified farm data',
      desc: 'Bring field notes, sensors and imagery into one clean model.'
    },
    {
      icon: <LineChart className="h-5 w-5" />, 
      title: 'Decisions, not dashboards',
      desc: 'Get clear recommended actions, thresholds and alerts instead of charts.'
    },
    {
      icon: <PlugZap className="h-5 w-5" />, 
      title: 'Simple integrations',
      desc: 'Connect soil sensors, weather, ERP and satellite providers in minutes.'
    },
    {
      icon: <Leaf className="h-5 w-5" />, 
      title: 'Built for sustainability',
      desc: 'Increase yield and reduce inputs with precise, timely guidance.'
    },
  ]
  return (
    <section id="product" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">A minimalist stack that scales</h2>
          <p className="mt-3 text-white/80">Everything you need to capture field data, reason with AI and deliver results on WhatsApp.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((f) => (
            <div key={f.title} className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 text-white/80 hover:bg-emerald-500/10 transition">
              <div className="h-10 w-10 rounded-lg bg-emerald-500/20 text-emerald-200 flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h3 className="text-white font-medium">{f.title}</h3>
              <p className="text-white/80 text-sm mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
