"use client";

import Header from "../components/Header";

const experiences = [
  {
    company: "Zignuts Technolabs",
    role: "Full Stack Developer",
    duration: "Feb 2026 – Present",
    technologies: ["Javascript", "Typescript", "MongoDB", "MySQL","React","Node.js","Next.js","Express.js"],
    description: [],
    isCurrentEmployer: true,
    location:"Gandhinagar, India"
  },
  {
    company: "Winjit Technologies",
    role: "Full Stack Developer",
    duration: "Feb 2020 – July 2022",
    technologies: ["Javascript", ".Net Core", "Web API's", "Microsoft SQL Server","Oracle DB"],
    description: [
      "Worked on scalable web applications using .Net Core and JavaScript.",
      "Increased application performance by optimizing database queries and backend logic and reducing queries by dynamic data fetching of data",
      "Designed REST APIs and integrated backend services efficiently and Integrated API to Frontend in Android and iOS applications.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions on time.",
      "Conducted Code Reviews and Unittesting to ensure code quality and reliability.",
    ],
    isCurrentEmployer: false,
    location:"Nashik, India"
  },
  {
    company: "Logistics - Mr Loggage",
    role: "Mobile Developer",
    duration: "July 2024 – Sept 2024",
    technologies: ["Flutter", "Dart", "Firebase"],
    description: [
      "Focused on UI development in Flutter and Dart.",
      "Collaborated closely with designers and backend teams for mobile app development.",
      "Implemented responsive and accessible mobile-first features.",
      "Integrated RESTful APIs and third-party services to enhance app functionality and Rewrote existing features to improve performance and user experience.",
      "Implemented state management using Provider and added unit tests to ensure code quality.",
    ],
    isCurrentEmployer: false,
    location:"Vadodara, India"
  },
];

export default function WorkExp() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-2">
        <Header />
      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-8 mt-4">
        Experience
      </h2>

      <div className="relative pl-6 space-y-6">
        {/* Vertical timeline line */}
        <span className="absolute -left-2 top-0 bottom-0 w-px bg-zinc-300" />

        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Dot */}
            <span className="absolute top-5 h-3 w-3 rounded-full bg-white border border-zinc-400" />

            {/* Experience card */}
            <div className="rounded-md border border-zinc-200 bg-white px-4 py-4">
              <p className="font-medium text-zinc-900">
                {exp.company}{" "}
                {exp.isCurrentEmployer && (
                  <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Current
                  </span>
                )}
              </p>
              <p className="text-sm text-zinc-500">
                {exp.role} · {exp.duration} - {exp.location}
              </p>

              {/* Technologies */}
              <h3 className="mt-3 font-semibold text-zinc-900 text-sm">
                Tools & Technologies:
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {exp.technologies.map((tech, tIdx) => (
                  <code
                    key={tIdx}
                    className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium"
                  >
                    {tech}
                  </code>
                ))}
              </div>

              {/* Description */}
              {exp.description.length > 0 && (
                <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-zinc-600">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
