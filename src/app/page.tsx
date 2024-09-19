"use client"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Image from "next/image";
import { useState } from "react";
import HomeLayout from "./home/layout";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [Loading, setLoading] = useState(true);
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Full-Stack Developer.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  setInterval(()=>setLoading(false),5000)
  return (
    (Loading?
    (
      <BackgroundBeamsWithCollision className="flex flex-col">
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Welcome To my Portfolio{" "}<br/>
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Wait up Just a Sec.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Wait up Just a Sec.</span>
          </div>
        </div>
        <div className="relative bottom-[-10rem]">
          <TypewriterEffectSmooth words={words} />
        </div>
        
        
      </h2>
      
      </BackgroundBeamsWithCollision>
    )
    :
    (
      router.push('/home')
    )
  )
  );
}
