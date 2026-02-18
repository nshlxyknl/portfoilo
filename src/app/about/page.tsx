import { Button } from "@/components/ui/button"
import Link from "next/link"

 const AboutPage = () => {
  return (
    <div id="about" className="pt-150 lg:pt-40 ">


    <div  className="h-full flex lg:ml-0 lg:flex-row flex-col  gap-20 lg:gap-50">

        <div className=" mt-25 lg:pl-40">
            <span className="text-8xl font-serif">About</span> <br></br>
            <Link href="/CvNischal.pdf" className="w-fit" download>
             <Button className="text-l border w-fit h-12 m-10 " variant="outline">
                Download CV
                </Button>
                </Link>
             </div>
        <div className="font-serif text-3xl whitespace-pre-wrap max-w-175 lg:ml-15 ">Computer Science student with strong interest in full
          stack web development. <br/> <br/>
          Passionate about building real-world
          applications using 
          MERN and Next. <br></br><br></br>
          Self-motivated learner 
          with a solid foundation in data structures and algorithms. <br></br><br></br>
          Always eager to take on new challenges and build impactful software.</div>

</div>
                <div className="h-px scale-y-[0.2] lg:w-350 mt-30 mx-auto bg-black dark:bg-blue-200"></div>

    </div>
  )
}

export default AboutPage