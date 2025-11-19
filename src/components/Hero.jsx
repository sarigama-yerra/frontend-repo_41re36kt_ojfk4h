import Spline from '@splinetool/react-spline';
import { ArrowRight, Bot, Database, MessageCircle, Leaf } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
              <Leaf className="h-3.5 w-3.5" /> AI Agents • WhatsApp • Farm intelligence
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
              Grow smarter with AI-driven agri agents
            </h1>
            <p className="mt-5 text-lg text-white/80 leading-relaxed">
              Neural Harvest helps modern farms automate conversations, capture field data, and turn insights into higher yields. Minimal, focused, and built for growers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#demo" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-white px-5 py-3 font-medium hover:bg-emerald-600 transition">
                Start free trial
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="https://wa.me/15551234567" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-white/5 text-white px-5 py-3 font-medium hover:bg-white/10 transition">
                <MessageCircle className="h-4 w-4" />
                Talk on WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature icon={<Bot className='h-4 w-4' />} title="AI Field Agents" subtitle="Answer questions, schedule visits, log issues" />
              <Feature icon={<MessageCircle className='h-4 w-4' />} title="WhatsApp-native" subtitle="Frictionless onboarding and support" />
              <Feature icon={<Database className='h-4 w-4' />} title="Data to Decisions" subtitle="From raw inputs to clear actions" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/85" />
    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-emerald-50/90">
      <div className="flex items-center gap-2 text-emerald-200">
        {icon}
        <span className="text-sm font-medium text-white">{title}</span>
      </div>
      <p className="mt-1 text-xs text-white/70">{subtitle}</p>
    </div>
  );
}
