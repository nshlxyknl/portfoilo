
import Image from 'next/image'
import  img  from '../../../public/1.jpg'

 const HomePage = () => {
  return (
    <div className='h-screen'>
    <div className=" flex mt-25 ">
<div className="w-1/2 ml-10">
<span className="font-serif text-3xl">Hey, I am</span><br></br> <br></br>
<span className="text-8xl font-serif">Nischal Khanal</span> <br></br> <br></br> <br></br>
<span className="text-3xl font-serif">I build clean, fast, and user-friendly websites and love turning ideas into real digital experiences.</span> <br></br>

</div>
<div className="flex items-center ml-35 ">
    <Image src={img} alt='pp' className='rounded-full h-111 w-130 object-cover'/> 
</div>

    </div>
            <div className="h-px scale-y-[0.2] w-[1400px] mt-24 mx-auto bg-black dark:bg-blue-200"></div>
    </div>
  )
}

export default HomePage