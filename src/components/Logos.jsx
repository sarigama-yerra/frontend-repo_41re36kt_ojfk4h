export default function Logos() {
  const logos = [
    'AgriCo', 'GreenLeaf', 'FarmX', 'HarvestIQ', 'SoilSense', 'CropFlow'
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-wider text-white/50">Trusted by data-driven growers</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center h-10 rounded-lg border border-white/10 bg-white/5 text-white/70 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
