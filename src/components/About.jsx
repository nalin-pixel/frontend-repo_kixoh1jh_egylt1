export default function About() {
  const stats = [
    { value: '500+', label: 'Boarding Students' },
    { value: '30', label: 'Qualified Teachers' },
    { value: '15', label: 'National Awards' },
    { value: '100%', label: 'Qur\'an Memorization Program' },
  ];

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">About Our School</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">An Nahl Islamic Boarding School is dedicated to holistic education—combining Hifz, strong academics, and personal development. Our students thrive in a caring, disciplined environment with modern facilities and experienced mentors.</p>
            <p className="mt-3 text-gray-700 leading-relaxed">We emphasize Arabic and Islamic studies alongside STEM and languages, preparing graduates to excel globally while remaining firmly rooted in their faith.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border p-6 text-center bg-gray-50">
                <div className="text-3xl font-bold text-emerald-700">{s.value}</div>
                <div className="mt-1 text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
