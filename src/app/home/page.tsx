"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import pic from "@/assets/WhatsApp_Image_2023-01-18_at_18.43.50_1_-removebg.png"
import {
  IconBrandGithubFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
  IconBrandYoutubeKids,
  IconFileTypePdf
} from "@tabler/icons-react";

const page = () => {
 
  return (
    <div className="flex flex-1 w-full overflow-x-hidden">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
           
              <div className="h-15 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
              <h2 className="text-xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                {/* Welcome To my Portfolio{" "}<br/> */}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">HomePage</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">HomePage</span>
                </div>
                </div>
                </h2>
              </div>
            
          </div>
          <div className="flex gap-2 flex-1 overflow-y-auto rounded-xl">
           
              <div className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 overflow-y-auto hidden md:block" >
              <AuroraBackground>
                <motion.div
                  initial={{ opacity: 0.0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                  }}
                  className="relative flex flex-col"
                > 
                <div className="flex flex-row">
                  <div className="relative top-5 left-0 w-fit">
                   <div className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
                     Hi, I&apos;m Ankit, a Software Developer based in India.
                   </div>
                  <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                    And this, is my Portfolio.
                  </div>
                  <div className="flex flex-row">
                     <IconBrandGithubFilled size={70} color="white" className="mx-3 "/>
                     <IconBrandLinkedin size={70} color="white" className="mx-3"/>
                     <IconMailFilled size={70} color="white" className="mx-3"/>
                     <IconBrandX size={70} color="white" className="mx-3"/>
                     <IconBrandYoutubeKids size={70} color="white" className="mx-3"/>
                     <IconFileTypePdf size={70} color="white" className="mx-3"/>
                   </div>
                  
                  </div>
                  
                  <Image
                    src={pic}
                    className="hidden w-[30vw] backdrop-blur-2xl rounded-full border-1  relative md:hidden lg:block"
                    width={1080}
                    height={1080}
                    alt="Avatar"
                  />
                  </div>
                  <div>
                  <div className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
                     Section
                   </div>
                   <div className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
                     Section
                   </div>
                   <div className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
                     Section
                   </div>
                  </div>
                  
                </motion.div>
              </AuroraBackground>
              </div>
              <div>

              </div>
           
          </div>
        </div>
    </div>
  )
}

export default page