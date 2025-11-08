export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-emerald-600 text-white grid place-items-center font-bold">AN</div>
            <div>
              <p className="font-semibold text-gray-900">An Nahl Islamic Boarding School</p>
              <p className="text-sm text-gray-600">Faith • Knowledge • Character</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-sm">Jl. Nurul Iman No. 7, Sukamaju, Indonesia. Open for visits by appointment. Office hours Mon–Fri 08:00–16:00.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Contact</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li>Phone: +62 812-3456-7890</li>
            <li>Email: admissions@annahl.sch.id</li>
            <li>WhatsApp: +62 812-3456-7890</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Quick Links</h4>
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            <li><a className="hover:text-emerald-700" href="#about">About</a></li>
            <li><a className="hover:text-emerald-700" href="#programs">Programs</a></li>
            <li><a className="hover:text-emerald-700" href="#admissions">Admissions</a></li>
          </ul>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© {year} An Nahl Islamic Boarding School. All rights reserved.</div>
    </footer>
  );
}
