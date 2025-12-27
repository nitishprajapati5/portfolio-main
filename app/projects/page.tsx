"use client";

import Header from "../components/Header";

const experiences = [
  {
    company: "Github Evaluator",
    description: ["Full Stack Developer", "Built AI-powered tools for code evaluation"],
    technologies: ["Javascript", "Typescript", "MongoDB", "Vercel SDK AI"],
    iframe: "https://github-evaluator-t2ck.vercel.app/", // replace with embed URL if available
  },
  {
    company: "Portfolio Project",
    description: ["Next.js app for portfolio showcase"],
    technologies: ["Next.js", "Tailwind CSS", "React"],
    iframe: "https://distributed-files.vercel.app/login",
  },
];

export default function WorkExp() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <Header />
      <h2 className="text-3xl font-semibold text-zinc-900 mb-8 mt-4 text-center">
        Projects & Work
      </h2>

      <div className="grid md:grid-cols-2 gap-6 rounded-4xl">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg border border-zinc-200 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-zinc-200 flex justify-between items-center">
              <p className="font-medium text-zinc-900">{exp.company}</p>
            </div>

            {/* Iframe preview */}
            <div className="w-full h-64 bg-zinc-100">
              <iframe
                src={exp.iframe}
                className="w-full h-full"
                frameBorder="0"
                height={500}
                width={500}
                title={exp.company}
              />
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col gap-3">
              {/* Description */}
              <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
                {exp.description.map((desc, dIdx) => (
                  <li key={dIdx}>{desc}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, tIdx) => (
                  <code
                    key={tIdx}
                    className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium"
                  >
                    {tech}
                  </code>
                ))}
              </div>

              {/* Link */}
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
