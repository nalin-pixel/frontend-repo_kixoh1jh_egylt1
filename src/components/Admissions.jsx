import { CheckCircle2 } from 'lucide-react';

const steps = [
  'Submit online application form',
  'Upload previous transcripts and documents',
  'Placement test and interview',
  'Enrollment confirmation and orientation',
];

export default function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Admissions</h2>
            <p className="mt-3 text-gray-700">We welcome applications from students committed to memorizing the Qur'an and achieving academic excellence.</p>
            <ul className="mt-6 space-y-3">
              {steps.map((s) => (
                <li key={s} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2 className="text-emerald-600 mt-0.5" size={20} />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-gray-50">
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Name</label>
                  <input type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Parent Contact</label>
                  <input type="tel" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="Phone number" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Program Interest</label>
                <select className="mt-1 w-full rounded-md border-gray-300 focus:border-emerald-500 focus:ring-emerald-500">
                  <option>Hifz & Tahfiz</option>
                  <option>Academic + Hifz</option>
                  <option>Secondary (SMP/MTs)</option>
                  <option>Senior (SMA/MA)</option>
                </select>
              </div>
              <button type="button" className="w-full rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-700">Submit Interest</button>
              <p className="text-xs text-gray-500">Submitting this form indicates interest only. Our admissions team will contact you with next steps.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
