import { Button } from "@/components/ui/button"
import Link from "next/link"

 const AboutPage = () => {
  return (
    <div id="about" className="pt-40">
    <div  className="h-full flex ">

        <div className="w-175 mt-25 pl-40">
            <span className="text-8xl font-serif">About</span> <br></br>
            <Link href="/CvNischal.pdf" download>
             <Button className="text-l border w-40 h-12 m-10 " variant="outline">
                Download CV
                </Button>
                </Link>
             </div>
        <div className="font-serif text-3xl  ">Computer Science student with strong interest in full<br></br>
          stack web development. <br></br><br></br>
          Passionate about building real-world
          applications using <br></br>
          MERN and Next. <br></br><br></br>
          Self-motivated learner 
          with a solid foundation in data <br></br>structures and algorithms. <br></br><br></br>
          Always eager to take on new challenges and build <br></br>impactful software.</div>

</div>
                <div className="h-px scale-y-[0.2] w-350 mt-30 mx-auto bg-black dark:bg-blue-200"></div>

    </div>
  )
}

export default AboutPage