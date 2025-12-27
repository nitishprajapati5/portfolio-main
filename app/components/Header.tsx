export default function Header() {

    const data = [
      { name: "Home", href: "/" },
      { name: "Work", href: "/work" },
      { name: "Blogs", href: "/blogs" },
      { name: "Projects", href: "/projects" },
    ];

  return (
    <div>
      <div className="flex flex-row gap-6">
        {data.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="
              
              relative cursor-pointer
              after:absolute after:right-0 after:-bottom-1
              after:h-[1.5px] after:w-0
              after:bg-current
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
