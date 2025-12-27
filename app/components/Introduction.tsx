import { Download, Send } from "lucide-react";

export default function Introduction() {
  return (
    <section className="max-w-3xl mx-auto mt-32 px-4">
      <h1 className="text-2xl md:text-3xl font-semibold leading-snug mb-8">
        Hi, I’m <span className="text-black">Nitish</span>{" "}
        <span className="text-gray-400 mx-1">—</span>
        <span className="text-gray-600 text-lg md:text-xl font-normal">
          Full-Stack Web Application Developer
        </span>
      </h1>

      <p className="text-base md:text-lg text-black-600 leading-relaxed tracking-wide">
        I build{" "}
        <span className="">
          web applications that are scalable,efficient,robust with clean
          architecture using
        </span>{" "}
        <code className="inline-block mx-1.5 px-3 py-1 text-sm font-medium tracking-wide rounded-full outline-1 outline-dashed outline-black-500">
          React
        </code>
        <code className="inline-block mx-1.5 px-3 py-1 text-sm font-medium tracking-wide rounded-full outline-1 outline-dashed outline-black-500">
          JavaScript
        </code>
        <code className="inline-block mx-1.5 px-3 py-1 text-sm font-medium tracking-wide rounded-full outline-1 outline-dashed outline-black-500">
          TypeScript
        </code>
        <code className="inline-block mx-1.5 px-3 py-1 text-sm font-medium tracking-wide rounded-full outline-1 outline-dashed outline-black-500">
          Next.js
        </code>
        and
        <code className="inline-block mx-1.5 px-3 py-1 text-sm font-medium tracking-wide rounded-full outline-1 outline-dashed outline-black-500">
          MySQL
        </code>
        .
      </p>

      <div className="mt-8 flex flex-wrap gap-4">
        {/* Primary button */}
        <a
          href="mailto:nitishprajapati180@gmail.com"
          className="
    cursor-pointer
      inline-flex items-center gap-2
      rounded-md
      bg-zinc-900 px-5 py-2.5
      text-sm font-medium text-white
      shadow-sm
      transition-all duration-200
      hover:bg-zinc-800
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-zinc-900
      focus-visible:ring-offset-2
      active:scale-[0.98]
    "
        >
          <Send className="h-4 w-4" />
          Get in Touch
        </a>

        {/* Secondary button */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="
        cursor-pointer
       inline-flex items-center gap-2
      rounded-md
      bg-zinc-900 px-5 py-2.5
      text-sm font-medium text-white
      shadow-sm
      transition-all duration-200
      hover:bg-zinc-800
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-zinc-900
      focus-visible:ring-offset-2
      active:scale-[0.98]
    "
        >
          <Download className="h-4 w-4" />
          <span>Download Resume / CV</span>
        </a>
      </div>
    </section>
  );
}
