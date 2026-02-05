
import { Toaster } from "sonner";
import  AboutPage  from "./about/page";
import  ContactPage  from "./contact/page";
import HomePage from "./home/page";
import ProjectPage from "./projects/page";
import  Skills from "./skills/page";

export default function Home() {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <Skills/>
      <ProjectPage />
      <ContactPage />
               <Toaster position="top-right" />

    </div>
  );
}
