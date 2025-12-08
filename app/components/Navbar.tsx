export default function Navbar() {
  return (
    <header className="w-full z-20">
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--ferrari-red)] flex items-center justify-center text-xs font-bold tracking-[0.25em] uppercase">
            SF
          </div>
          <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">
            Scuderia Ferrari
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-xs uppercase tracking-[0.2em] text-zinc-500">
          <button className="hover:text-zinc-200 transition">Monoplace</button>
          <button className="hover:text-zinc-200 transition">Palmarès</button>
          <button className="hover:text-zinc-200 transition">Contact</button>
        </div>
      </nav>
    </header>
  );
}
