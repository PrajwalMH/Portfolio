"use client";

import "../StarBorder.css";

export default function LeadershipInvolvement() {
  return (
    <section
      id="leadership"
      className="mt-24 px-4 lg:px-12 text-left"
      aria-label="Leadership and campus involvement"
    >
      <div className="relative mx-0 lg:mx-8 my-4 overflow-hidden">
        <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 md:p-10 rounded-lg shadow-lg min-h-[300px] relative z-10 star-border">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-300 mb-4 text-center md:text-left">
            Leadership &amp; Campus Involvement
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column: roles and campus involvement */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Head Volunteer — Techno-Cultural Club
                </h3>
                <p className="text-xs md:text-sm text-slate-300">
                  JSS Academy of Technical Education
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-100 list-disc list-inside">
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

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Volunteer — NSS (Yodha: The Warrior Within)
                </h3>
                <p className="text-xs md:text-sm text-slate-300">
                  June 2021 – June 2022
                </p>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-100 list-disc list-inside">
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
            </div>

            {/* Right column: achievements and traits */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Achievements &amp; Leadership
                </h3>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-100 list-disc list-inside">
                  <li>
                    Recognized as “Employee of the Month” at Nuvepro
                    Technologies Pvt. Ltd. in January 2023.
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

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-sky-200">
                  Key Leadership Traits
                </h3>
                <ul className="mt-3 space-y-2 text-sm md:text-base text-slate-100 list-disc list-inside">
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

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-14 h-14 rounded-tl-lg neon-corner-tl" />
          <div className="absolute bottom-0 right-0 w-14 h-14 rounded-br-lg neon-corner-br" />
        </div>
      </div>
    </section>
  );
}

