
import Image from 'next/image'
import  img  from '../../../public/1.jpg'
import { Badge } from '@/components/ui/badge'

 const HomePage = () => {
  return (
    <div id='home' className='h-screen pt-25'>
    <div className=" flex mt-25 md:flex-col">
<div className="w-1/2 ml-20 pt-15 ">
<span className="font-serif text-3xl">Hey, I am</span> 
<Badge className='ml-7 w-45 h-10 z-10 font-light text-xl '>
  <div className='w-3 bg-green-600 h-3 rounded-4xl mr-1'></div>
  Open to Work</Badge>
<br></br> <br></br>
<span className="text-8xl font-serif">Nischal Khanal</span> <br></br> <br></br> <br></br>
<span className="text-3xl font-serif">I build clean, fast, and user-friendly websites and love turning ideas into real digital experiences.</span> <br></br>

</div>
<div className="flex items-center ml-35 ">
    <Image src={img} alt='pp' className='cursor-pointer rounded-full h-100 w-100 object-cover object-top transition-colors hover:shadow-[0_0_25px_5px_rgba(34,211,238,0.8)]'/> 
</div>

    </div>
            <div  className="h-px scale-y-[0.2] w-350 mt-40 mx-auto bg-black dark:bg-blue-200"></div>
    </div>
  )
}

export default HomePage