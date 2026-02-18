import ProjectCard from "@/components/compo/ProjectCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import room from '../../../public/room.png'
import book from "../../../public/book.png"
import { StaticImageData } from "next/image"



const ProjectPage = () => {
const projects=[
    {
      title: "Hotel Booking System",
      gitlink: "https://github.com/nshlxyknl/RoomBookingSystem",
      url: "https://myroom.nischalkhanal7.com.np/",
      image: room
    },
    {
      title: "Book Ecom",
      gitlink: "https://github.com/nshlxyknl/BookEcom",
      url: "https://bookecom.nischalkhanal7.com.np",
      image: book
    }
]
  


  return (
    <div id="projects" className="pt-40 ">
            <div  className="h-full flex ml-20 lg:ml-0 lg:flex-row flex-col  gap-20 lg:gap-50 ">

        <div className="mt-10 lg:pl-30  text-center lg:text-start">
            <span className="text-8xl font-serif">Projects</span> <br></br>
             </div>
        <div className="grid lg:flex justify-center lg:justify-start lg:mr-5 gap-5 ml-5 lg:ml-0">
                    {projects.map((projects, index) => (
          <ProjectCard items={projects} key={index}/>
                    ))}

        </div>

</div>
              <div className="h-px scale-y-[0.3] lg:w-350 w-150 mt-30 mx-auto bg-black dark:bg-blue-200"></div>
</div>
  )
}
export default ProjectPage