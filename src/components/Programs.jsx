import { Book, FlaskConical, Languages, GraduationCap } from 'lucide-react';

const programs = [
  {
    icon: Book,
    title: 'Hifz & Tahfiz',
    desc: 'Structured Qur\'an memorization with certified Huffaz, tajwid mastery, and daily muraja\'ah.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    desc: 'National curriculum integrated with Islamic values, focusing on critical thinking and problem solving.',
  },
  {
    icon: FlaskConical,
    title: 'Science & Technology',
    desc: 'STEM labs, robotics, and coding clubs that inspire curiosity and innovation.',
  },
  {
    icon: Languages,
    title: 'Arabic & Languages',
    desc: 'Immersive Arabic and English programs to build fluency and confidence.',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Programs</h2>
          <p className="mt-3 text-gray-700">Balanced curriculum for spiritual, academic, and personal growth.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 border hover:shadow-md transition">
              <div className="h-12 w-12 rounded-lg bg-emerald-100 text-emerald-700 grid place-items-center">
                <p.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
