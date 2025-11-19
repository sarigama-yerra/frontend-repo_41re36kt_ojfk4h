import { Menu, Leaf, MessageCircle, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-400 via-lime-400 to-green-600 flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">Neural Harvest</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#product" className="hover:text-white transition">Product</a>
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#docs" className="hover:text-white transition">Docs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-emerald-500/90 hover:bg-emerald-500 text-white px-4 py-2 text-sm transition"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <button className="md:hidden p-2 rounded-lg border border-white/10 text-white/80 hover:text-white hover:bg-white/5">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
