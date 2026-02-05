"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useTheme } from "@/context/ThemeContext"
import Link from "next/link"
import { FormEvent, useState } from "react"
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { toast } from "sonner"


interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

const ContactPage = () => {
  const { isDark } = useTheme()
  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message })
      });
      const data: ApiResponse = await res.json();

      if (data.success) {
        toast.success("message submitted")
        setName("");
        setMessage("");
      } else {
        toast.error("message not submitted");
      }


    } catch (error) {
      toast.error("error")
    }
  }

  return (

    <div id="contact" className="pt-40">
      <div className="h-full flex  gap-50 ">

        <div className="w-175 mt-10 pl-30">
          <span className="text-8xl font-serif">Contact Me</span> <br></br>
        </div>

        <div className="flex flex-col gap-30">
          <form onSubmit={handlesubmit}>
            <div className="font-serif  flex flex-col gap-3">
              <Input className="w-40 h-12" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />

              <div className="flex gap-4">
                <Textarea className="w-80 h-22" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} />
                <button type="submit">
                  <FaTelegramPlane size={40}
                    className={`cursor-pointer mt-5 transition-colors ${isDark
                      ? "text-white hover:text-cyan-400"
                      : "text-gray-800 hover:text-yellow-400"
                      }`} />
                </button>
              </div>
            </div>
          </form>



          <div>
            <div className="flex  gap-2 justify-center items-center">
              <Link href={"https://github.com/nshlxyknl"} target="_blank">
                <FaGithub size={40} className={`cursor-pointer transition-colors ${isDark
                  ? "text-white hover:text-cyan-400"
                  : "text-gray-800 hover:text-yellow-400"
                  }`} />
              </Link>
              <Link href={"https://www.linkedin.com/in/nischalnischal/"} target="_blank">
                <FaLinkedin size={40} className={`cursor-pointer transition-colors ${isDark
                  ? "text-white hover:text-cyan-400"
                  : "text-gray-800 hover:text-yellow-400"
                  }`} />
              </Link>
              <Link href={"https://x.com/ezxyant"} target="_blank">
                <FaXTwitter size={40} className={`cursor-pointer transition-colors ${isDark
                  ? "text-white hover:text-cyan-400"
                  : "text-gray-800 hover:text-yellow-400"
                  }`} />
              </Link>
            </div>
            <div className="text-sm flex  justify-center">
              2025 © Nischal Khanal
            </div>
          </div>
        </div>
      </div>
      <div className="h-px scale-y-[0.3] w-350 mt-30 mb-10 mx-auto bg-black dark:bg-blue-200"></div>

    </div>

  )
}

export default ContactPage