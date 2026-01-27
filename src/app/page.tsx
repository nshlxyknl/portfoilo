import { Navbar } from "../app/navbar/page";
import  AboutPage  from "./about/page";
import  ContactPage  from "./contact/page";
import HomePage from "./home/page";
import ProjectPage from "./projects/page";
import { Skills } from "./skills/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <Skills/>
      <ContactPage />
    </div>
  );
}
