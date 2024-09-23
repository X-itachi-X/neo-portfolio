"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";


const page = () => {
 
  return (
    <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
           
              <div className="h-15 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 ">
              <h2 className="text-xl relative z-20 md:text-4xl lg:text-4xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                {/* Welcome To my Portfolio{" "}<br/> */}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">Achievements</span>
                </div>
                <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">Achievements</span>
                </div>
                </div>
                </h2>
              </div>
            
          </div>
          
           
               {/* Content */}
          <div className=" gap-2 h-[60vh] flex-1 rounded-xl overflow-y-auto  bg-white dark:bg-neutral-900">
           {/* //Big Screen HomePage */}
              
              <div className="h-full w-full rounded-lg overflow-y-auto hidden md:block bg-white dark:bg-neutral-900 z-10 px-5" >
                <div className="fixed w-[92vw] rounded-2xl  z-0">
                  <AuroraBackground>
                    <div></div>
                  </AuroraBackground>
                </div>
                <div className="z-10">
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
                    
                    
                    
                
                  </motion.div>
                </div>
                
              </div>
           {/* //Small Screen HomePage */}
              <div className="md:hidden">
              <HeroHighlight>
                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: [20, -5, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.4, 0.0, 0.2, 1],
                  }}
                  className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto]"
                >
                  <h2 className="text-3xl">
                   Hi, I am{" "}
                  <Highlight className="text-black dark:text-white">
                    Ankit Prakash!
                  </Highlight></h2>
                  <br/>
                  <div className=" text-base">
                  A passionate 
                  <Highlight className="text-black dark:text-white">Full-Stack Developer</Highlight>
                  
                  with a flair for creating visually stunning, user-friendly web applications, I bring ideas to life through code.</div><br/>
                  <Highlight className="text-black dark:text-white">
                  Let&apos;s turn your vision into reality!
                  </Highlight>
                </motion.h1>
              </HeroHighlight>
              </div>
           
          </div>
        
           
          </div>
        </div>
    
  )
}


export default page