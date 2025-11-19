import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* background glow */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25)_0%,rgba(14,165,233,0.2)_45%,rgba(249,115,22,0.15)_70%,transparent_75%)]" />
      </div>

      <Navbar />
      <Hero />
      <Logos />
      <Features />
      <CTA />

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-white/60 text-sm">
          <p>© {new Date().getFullYear()} AgriMind. All rights reserved.</p>
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
