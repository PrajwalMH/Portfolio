"use client";

export default function LeadershipInvolvement() {
  return (
    <section
      id="leadership"
      className="mt-24 px-4 lg:px-12 text-left"
      aria-label="Leadership and campus involvement"
    >
      <div className="max-w-5xl mx-auto my-6">
        <div className="rounded-3xl border border-sky-500/40 bg-slate-900/80 px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-300 mb-6 text-center md:text-left">
            Leadership &amp; Campus Involvement
          </h2>

          <div className="space-y-8 text-slate-100 text-sm md:text-base leading-relaxed">
            {/* Head Volunteer — Techno-Cultural Club */}
            <div className="flex flex-row items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Head Volunteer — Techno-Cultural Club
                </h3>
                <p className="text-xs md:text-sm text-slate-300">
                  JSS Academy of Technical Education
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>
                    Led and coordinated events and volunteer teams for a
                    student-run techno-cultural club.
                  </li>
                  <li>
                    Successfully executed multiple campus events, ensuring
                    timely logistics and team alignment.
                  </li>
                  <li>
                    Fostered collaboration, responsibility, and team spirit
                    among peers through active engagement.
                  </li>
                </ul>
              </div>
              <img
                src="/yodha.jpg"
                alt="Techno-Cultural Club / Yodha"
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-slate-600 shadow-md"
              />
            </div>

            {/* Volunteer — NSS (Yodha: The Warrior Within) */}
            <div className="flex flex-row items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Volunteer — NSS (Yodha: The Warrior Within)
                </h3>
                <p className="text-xs md:text-sm text-slate-300">
                  June 2021 – June 2022
                </p>
                <ul className="mt-3 space-y-2 list-disc list-inside">
                  <li>
                    Led community service projects such as blood donation camps
                    and educational outreach programs.
                  </li>
                  <li>
                    Collaborated with local police to organize public awareness
                    drives on traffic safety and social issues.
                  </li>
                  <li>
                    Organized village cleanup initiatives and promoted civic
                    responsibility among student volunteers.
                  </li>
                </ul>
              </div>
              <img
                src="/yodha.jpg"
                alt="NSS Yodha: The Warrior Within"
                className="w-20 h-20 md:w-24 md:h-24 rounded-xl object-cover border border-slate-600 shadow-md"
              />
            </div>

            {/* Achievements & Leadership */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                Achievements &amp; Leadership
              </h3>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  Recognized as “Employee of the Month” at Nuvepro Technologies
                  Pvt. Ltd. in January 2023.
                </li>
                <li>
                  Elected class representative during undergraduate studies,
                  acting as liaison between students and faculty.
                </li>
                <li>
                  Served as a cultural event lead in high school, coordinating
                  logistics and leading student teams.
                </li>
              </ul>
            </div>

            {/* Key Leadership Traits */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                Key Leadership Traits
              </h3>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>
                  Experienced in public speaking and crowd engagement during
                  university and community events.
                </li>
                <li>
                  Excellent collaboration, communication, and problem-solving
                  skills developed through volunteer leadership roles.
                </li>
                <li>
                  Balanced multiple responsibilities efficiently while
                  maintaining a strong work ethic and stress management.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
