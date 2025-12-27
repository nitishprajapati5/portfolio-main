import {
  GithubIcon,
  InstagramIcon,
  PenIcon,
  TwitterIcon,
  LucideLinkedin,
} from "lucide-react";

const socials = [
  {
    icon: LucideLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/nitish-mahendraprajapati/",
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    link: "https://www.instagram.com/nitish.m.prajapati/",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    link: "https://twitter.com/Nitish_MPrajapati",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    link: "https://github.com/NitishMahendraprajapati",
  },
  {
    icon: PenIcon,
    label: "Blog",
    link: "https://nitishmahendraprajapati.hashnode.dev/",
  },
];

export default function SocialLogin() {
  return (
    <div className="flex gap-4 mt-6 px-4 py-4">
      {socials.map(({ icon: Icon, label, link }) => (
        <a
          key={label}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="relative group"
        >
          {/* Icon */}
          <Icon
            className="
              h-5 w-5
              text-zinc-600
              transition-all duration-200
              group-hover:text-zinc-900
              group-hover:-translate-y-px
            "
          />

          {/* Tooltip */}
          <span
            className="
              pointer-events-none
              absolute -top-9 left-1/2 -translate-x-1/2
              rounded-md bg-zinc-900 px-2 py-1
              text-xs font-medium text-white
              opacity-0 translate-y-1
              transition-all duration-200
              group-hover:opacity-100
              group-hover:translate-y-0
              whitespace-nowrap
            "
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}

