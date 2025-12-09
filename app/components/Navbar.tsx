export default function Navbar() {
  return (
    <header className="w-full z-20">
      <nav className="flex items-center justify-between px-6 lg:px-16 py-4">
        <div className="flex items-center gap-3">
          <img
            src="/images/ferrari-logo.png"
            alt="Logo Ferrari"
            className="h-15 w-15 object-contain select-none"
          />
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
