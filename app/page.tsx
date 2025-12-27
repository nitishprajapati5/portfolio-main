import Blogs from "./components/Blogs";
import Books from "./components/Books";
import ContactCard from "./components/ContactMe";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import SocialLogin from "./components/SocialLogin";
import WorkExp from "./components/WorkExp";

export default function Home() {
  return (
    <div className="
      flex flex-col 
      items-center 
      bg-zinc-50 
      font-sans
      text-black
      px-4 py-4 
    ">
      <div className="w-full max-w-3xl ">
        <Header />
        <Introduction />
        <SocialLogin/>
        <WorkExp />
        <Projects />
        <Blogs/>
        <Books />
        <ContactCard />
      </div>
    </div>
  );
}
