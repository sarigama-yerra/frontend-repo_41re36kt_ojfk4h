export default function Logos() {
  const logos = [
    'AgriCo', 'GreenLeaf', 'FarmX', 'HarvestIQ', 'SoilSense', 'CropFlow'
  ];
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-wider text-emerald-200/70">Trusted by data-driven growers</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-90">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center h-10 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-emerald-100 text-sm">
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
