"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
{
    company: "Zignuts Technolabs",
    role: "Full Stack Developer",
    duration: "Feb 2020 – July 2022",
    technologies: ["Javascript", "Typescript", "MongoDB", "MySQL","React","Node.js","Next.js","Express.js"],
    description: [
    ],
    isCurrentEmployer: true,
    location:"Gandhinagar,India"
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
    location:"Nashik,India"
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
    location:"Vadodara,India"
  },
];

export default function Blogs() {
  const lineRef = useRef<HTMLSpanElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lineRef.current?.classList.remove("scale-y-0");
          lineRef.current?.classList.add("scale-y-100");
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="max-w-3xl mx-auto px-4 py-12">
      <p className="text-sm tracking-widest text-zinc-500 mb-2">Featured</p>

      <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-8">
        Blogs 
      </h2>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Animated vertical line */}
        <span
          ref={lineRef}
          className="
            absolute left-0 top-0 bottom-0
            w-px
            bg-zinc-300
            transform scale-y-0 origin-top
            transition-transform duration-1000 ease-out
          "
        />

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <TimelineItem key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface TimelineItemProps {
  company: string;
  role: string;
  duration: string;
  description: string[];
  technologies: string[];
  isCurrentEmployer?: boolean;
  location:string
}

function TimelineItem({
  company,
  role,
  duration,
  description,
  technologies,
  isCurrentEmployer,
  location
}: TimelineItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Timeline dot */}
      <span className="absolute top-5 h-3 w-3 rounded-full bg-white border border-zinc-400" />

      <div className="rounded-md border border-zinc-200 bg-white">
        {/* Header */}
        <button
          onClick={() => setOpen(!open)}
          className="
            flex w-full items-center justify-between
            px-4 py-3 text-left
            hover:bg-zinc-50
            transition-colors
          "
        >
          <div>
            <p className="font-medium text-zinc-900">{company} {isCurrentEmployer && <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Current</span>}</p>
            <p className="text-sm text-zinc-500">
              {role} · {duration} - {location}
            </p>
          </div>

          

          <ChevronDown
            className={`h-4 w-4 text-zinc-500 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Content */}
        {open && (
          <div className="px-4 pb-4 text-sm text-zinc-600 leading-relaxed space-y-2">
                            <h1 className="font-bold">Tools and Technolgies</h1>

             <div className="mt-2 flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <code
                  key={idx}
                  className="
                    inline-block
                    px-3 py-1
                    rounded-full
                    bg-indigo-100 text-indigo-700
                    text-xs font-medium
                  "
                >
                  {tech}
                </code>
              ))}
            </div>
            {/* Description array */}
            <ul className="list-disc pl-5 space-y-1">
              {description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Technologies array */}
           
          </div>
        )}
      </div>
    </div>
  );
}
