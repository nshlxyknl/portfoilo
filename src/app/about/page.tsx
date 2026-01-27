import { Button } from "@/components/ui/button"
import Link from "next/link"

 const AboutPage = () => {
  return (
    <div>
    <div id="about" className="h-[300px] flex  ">

        <div className="w-[700px] ml-10">
            <span className="text-8xl font-serif">About</span> <br></br>
            <Link href="/CvNischal.pdf" download>
             <Button className="text-l border w-[160px] h-[48px] m-10" variant="outline">
                Download CV
                </Button>
                </Link>
             </div>
        <div className="font-serif text-3xl ">I’m someone who enjoys learning by building and figuring things out step by step. <br></br>
            I like taking ideas and shaping them into something real, <br></br>
            while paying attention to small details thatmake a big difference.<br></br><br></br>
             I’m naturally curious, always trying to improve, and I enjoy the process of growing <br></br>
            through the things I create.</div>

</div>
                <div className="h-px scale-y-[0.2] w-[1400px] mt-30 mx-auto bg-black dark:bg-blue-200"></div>

    </div>
  )
}

export default AboutPage