import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/KkE2v2b3ljW0P7wk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200">Faith • Knowledge • Character</span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">An Nahl Islamic Boarding School</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-xl">A nurturing environment where students memorize the Qur'an, pursue excellence in academics, and grow as leaders grounded in Islamic values.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#admissions" className="inline-flex items-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-700">Start Application</a>
              <a href="#programs" className="inline-flex items-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50">Explore Programs</a>
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white/60 to-transparent pointer-events-none rounded-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
