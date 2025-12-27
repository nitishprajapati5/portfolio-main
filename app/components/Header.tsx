export default function Header() {
  return (
    <div>
      <div className="flex flex-row gap-6">
        {["Work", "Blogs", "Projects"].map((item) => (
          <a
            key={item}
            href={`/${item.toLowerCase()}`}
            className="
              
              relative cursor-pointer
              after:absolute after:right-0 after:-bottom-1
              after:h-[1.5px] after:w-0
              after:bg-current
              after:transition-all after:duration-300
              hover:after:w-full
            "
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
