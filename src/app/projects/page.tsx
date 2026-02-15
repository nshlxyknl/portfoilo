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
    <div id="projects" className="pt-40">
            <div  className="h-full flex ">

        <div className="w-175 mt-30 pl-30">
            <span className="text-8xl font-serif">Projects</span> <br></br>
             </div>
        <div className="flex mr-5 gap-5">
                    {projects.map((projects, index) => (
          <ProjectCard items={projects} key={index}/>
                    ))}

        </div>

</div>
              <div className="h-px scale-y-[0.3] w-350] mt-25 mx-auto bg-black dark:bg-blue-200"></div>
</div>
  )
}
export default ProjectPage