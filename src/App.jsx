import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* background glow - tuned to agritech greens */}
      <div className="pointer-events-none fixed inset-0 opacity-50">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[650px] w-[650px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.28)_0%,rgba(101,163,13,0.22)_45%,rgba(34,197,94,0.18)_70%,transparent_75%)]" />
      </div>

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <Pricing />
      <CTA />

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-white/70 text-sm">
          <p>© {new Date().getFullYear()} Neural Harvest. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
