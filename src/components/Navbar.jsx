import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', label: 'About' },
    { href: '#programs', label: 'Programs' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur bg-white/70 shadow-sm' : 'bg-transparent'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center font-bold">AN</div>
          <div className="leading-tight">
            <p className="font-semibold text-gray-900">An Nahl</p>
            <p className="text-xs text-gray-600">Islamic Boarding School</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-emerald-700">
              {l.label}
            </a>
          ))}
          <a href="#admissions" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">
            Apply
          </a>
        </div>

        <button aria-label="Open Menu" onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-md hover:bg-gray-100">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                {l.label}
              </a>
            ))}
            <a href="#admissions" onClick={() => setOpen(false)} className="block text-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">
              Apply Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
