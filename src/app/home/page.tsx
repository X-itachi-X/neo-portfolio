"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import pic from "@/assets/WhatsApp_Image_2023-01-18_at_18.43.50_1_-removebg.png"
import { SiNextdotjs } from "react-icons/si";
import { GiServerRack } from "react-icons/gi";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { AiFillApi } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscBlank } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaLinux } from "react-icons/fa";
import { FloatingDock } from "@/components/ui/floating-dock";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  IconBrandGithub,
  
  IconHome,
  
  IconTerminal2,
} from "@tabler/icons-react";
import {
  IconBrandGithubFilled,
  IconBriefcaseFilled,
  IconBrandLinkedin,
  IconMailFilled,
  IconBrandX,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandYoutubeKids,
  IconFileTypePdf,
  IconBrandReact,
  IconStackFront,
  IconDatabaseCog,
  IconFileCode2,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCpp,
  IconSend,
  IconBrandDocker,
  IconBrandVscode,
} from "@tabler/icons-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { PinContainer } from "@/components/ui/3d-pin";
import Link from "next/link";
import Experience from "@/components/Experience";


const page = () => {
  const project1 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const project2 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const project3 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  const project4 = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];
  
  return (
    <div className="flex w-full">
        <div className="md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col md:gap-2 w-full h-full">
          <div className="md:gap-2 hidden md:flex">
           
              <div className="h-15 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800">
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
        {/* Content */}
          <div className=" md:gap-2 md:h-[60vh] flex-1 rounded-xl overflow-y-auto  bg-white dark:bg-neutral-900">
           {/* //Big Screen HomePage */}
              
              <div className="h-full w-full rounded-lg overflow-y-auto bg-white dark:bg-neutral-900 z-10 px-5" >
                <div className="fixed w-screen md:w-[92vw] rounded-2xl  z-0">
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
                    <div className="flex flex-row h-fit mt-[20vh] md:mt-0">
                    <div className="relative top-5 left-0 w-fit ">
                    <div id="start" className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
                      Hi, I&apos;m Ankit, a Software Developer based in India.
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                      And this, is my Portfolio.
                    </div>
                    <div className="grid grid-cols-3 md:flex md:flex-row">
                      <IconBrandGithubFilled size={70} color="white" className="mx-3 "/>
                      <IconBrandLinkedin size={70} color="white" className="mx-3"/>
                      <IconMailFilled size={70} color="white" className="mx-3"/>
                      <IconBrandX size={70} color="white" className="mx-3"/>
                      <IconBrandYoutubeKids size={70} color="white" className="mx-3"/>
                      <IconFileTypePdf size={70} color="white" className="mx-3"/>
                    </div>
                    <Link href="/home/timeline">
                    <div className=" mb-10">
                    <button className="p-[3px] relative w-fit mt-10 ml-[4rem]">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                       View My Timeline
                      </div>
                    </button>
                    </div>
                    
                    </Link>
                    </div>
                    {/* <div className="hidden lg:block mt-10"> */}
                    <Image
                      src={pic}
                      className="backdrop-blur-2xl rounded-full border-1 mt-10 relative hidden md:w-[10vw] md:h-[10vw] lg:w-[30vw] lg:h-[30vw] lg:block"
                      width={1080}
                      height={1080}
                      alt="Avatar"
                    />
                    
                    
                    </div>
                    
                    
                    <div>
                      {/* key skills */}
                        <div id="skills" className="text-2xl md:text-4xl font-bold dark:text-white h-fit w-full border-4">
                          Key Skills
                          <div className="border-4 border-red-400 w-fit xl:w-full items-center grid grid-cols-3 gap-4 md:gap-8 md:grid-cols-5 mx-auto xl:block">
                              <div className="rounded-3xl py-4 my-4 xl:p-4 xl:m-4 flex flex-col xl:flex-row backdrop-blur-2xl z-0">
                                  <BackgroundGradient className="rounded-[22px] w-fit mx-auto xl:w-[15rem] h-[10rem] xl:h-[14rem] max-w-sm flex flex-col justify-center items-center">
                                    <IconFileCode2 size={100} color="white" />
                                    <div className="text-xs xl:text-2xl xl:mt-4">Languages</div>
                                    
                                  
                                  </BackgroundGradient>
                                  <Card title="I know Javacript Very Well" icon={<IconBrandJavascript size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-yellow-700"
                                    />
                                  </Card>
                                  <Card title="I Know TypeScript Very Well" icon={<IconBrandTypescript size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-blue-400"
                                    />
                                  </Card>
                                  <Card title="I know Java Very Well" icon={<FaJava size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-yellow-600"
                                    />
                                  </Card>
                                  <Card title="I know C++ Very Well" icon={<IconBrandCpp size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-blue-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                              </div>
                              <div className="rounded-3xl py-4 my-4 xl:p-4 xl:m-4 flex flex-col xl:flex-row backdrop-blur-2xl z-0">
                                  <BackgroundGradient className="rounded-[22px] w-fit mx-auto xl:w-[15rem] h-[10rem] xl:h-[14rem] max-w-sm flex flex-col justify-center items-center">
                                    <IconStackFront size={100} color="white" />
                                    <div className="text-xs xl:text-2xl xl:mt-4">Front-End Skills</div>
                                    
                                  
                                  </BackgroundGradient>
                                  <Card title="I know React Very Well" icon={<IconBrandReact size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-blue-700"
                                    />
                                  </Card>
                                  <Card title="I Know Next.Js Very Well" icon={<SiNextdotjs size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-slate-900"
                                    />
                                  </Card>
                                  <Card title="I know Redux Very Well" icon={<IconBrandRedux size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-purple-600"
                                    />
                                  </Card>
                                  <Card title="I know TailwindCSS Effectively" icon={<IconBrandTailwind size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-blue-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                              </div>
                              <div className="rounded-3xl py-4 my-4 xl:p-4 xl:m-4 flex flex-col xl:flex-row backdrop-blur-2xl z-0">
                                  <BackgroundGradient className="rounded-[22px] w-fit mx-auto xl:w-[15rem] h-[10rem] xl:h-[14rem] max-w-sm flex flex-col justify-center items-center">
                                    <GiServerRack size={100} color="white" />
                                    <div className="text-xs xl:text-2xl xl:mt-4">Back-End Skills</div>
                                    
                                  
                                  </BackgroundGradient>
                                  <Card title="I know Express.Js Very Well" icon={<SiExpress size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-slate-300"
                                    />
                                  </Card>
                                  <Card title="I Know Node.Js Very Well" icon={<FaNode size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-green-600"
                                    />
                                  </Card>
                                  <Card title="I know REST API Very Well" icon={<AiFillApi size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  <Card title="I know Prisma Very Well" icon={<SiPrisma size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-green-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                              </div>
                              <div className="rounded-3xl py-4 my-4 xl:p-4 xl:m-4 flex flex-col xl:flex-row backdrop-blur-2xl z-0">
                                  <BackgroundGradient className="rounded-[22px] w-fit mx-auto xl:w-[15rem] h-[10rem] xl:h-[14rem] max-w-sm flex flex-col justify-center items-center">
                                    <IconDatabaseCog size={100} color="white" />
                                    <div className="text-xs xl:text-2xl xl:mt-4">DataBases</div>
                                    
                                  
                                  </BackgroundGradient>
                                  <Card title="I know MongoDB Very Well" icon={<SiMongodb size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-green-600"
                                    />
                                  </Card>
                                  <Card title="I Know PostgreSQL Very Well" icon={<BiLogoPostgresql size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-cyan-700"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  
                              </div>
                              <div className="rounded-3xl py-4 my-4 xl:p-4 xl:m-4 flex flex-col xl:flex-row backdrop-blur-2xl z-0">
                                  <BackgroundGradient className="rounded-[22px] w-fit mx-auto xl:w-[15rem] h-[10rem] xl:h-[14rem] max-w-sm flex flex-col justify-center items-center">
                                    <FaConnectdevelop size={100} color="white" />
                                    <div className="text-xs xl:text-2xl xl:mt-4">DevOps</div>
                                    
                                  
                                  </BackgroundGradient>
                                  <Card title="I know Docker Very Well" icon={<IconBrandDocker size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-blue-400"
                                    />
                                  </Card>
                                  <Card title="I Know Kubernetes Very Well" icon={<SiKubernetes size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-cyan-700"
                                    />
                                  </Card>
                                  <Card title="I Know Git Very Well" icon={<FaGitAlt size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  <Card title="I Know Linux Very Well" icon={<FaLinux size={100} />}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-indigo-400"
                                    />
                                  </Card>
                                  <Card title="" icon={<VscBlank size={100} className="hidden md:block"/>}>
                                    <CanvasRevealEffect
                                      animationSpeed={5.1}
                                      containerClassName="bg-red-400"
                                    />
                                  </Card>
                                  
                              </div>
                          </div>
                              <Link href="/home/skills">
                              <button className="p-[3px] relative w-fit mt-10 ml-[4rem] mb-[8rem] text-base">
                                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                View All Technologies I worked with
                                </div>
                              </button>
                              </Link>
                        </div>
                      {/* Projects */}
                        <div id="projects" className="text-2xl md:text-4xl font-bold dark:text-white w-full h-fit z-0">
                          Highlighted Projects
                          <div className="h-[250vh] 2xl:h-[80rem] w-full grid grid-cols-1 2xl:grid-cols-2 z-0" >
                            <ProjectCard title="google.com" link="https://www.google.com" data={project1}/>
                            <ProjectCard title="google.com" link="https://www.google.com" data={project2}/>
                            <ProjectCard title="google.com" link="https://www.google.com" data={project3}/>
                            <ProjectCard title="google.com" link="https://www.google.com" data={project4}/>
                          </div>
                          <Link href="/home/projects">
                          <button className="p-[3px] relative w-fit mt-10 mb-[8rem] ml-[4rem] text-base">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            View More Projects
                            </div>
                          </button>
                          </Link>
                        </div>
                      {/* Experience */}
                        <div id="experience" className="text-2xl md:text-4xl font-bold dark:text-white w-full mb-10">
                          Experience Snapshot
                          <div className="w-full ">
                            <Experience />
                          </div>
                          
                        </div>
                    
                    </div>
                    
                  </motion.div>
                </div>
                
              </div>
           {/* //Small Screen HomePage
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
              </div> */}
           
          </div>
        {/* Floating Dock */}
          <div className="bg-red-400 hidden md:block z-99">
            <FloatingDockDemo />
          </div>
        </div>
    </div>
  )
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm mx-auto md:p-4 w-fit h-fit md:h-[14rem] md:w-[10rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#start",
    },
 
    {
      title: "Key Skills",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#skills",
    },
    {
      title: "Highlighted Projects",
      icon: (
        <IconBrandVscode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Experience Snapshot",
      icon: (
        <IconBriefcaseFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#experience",
    },
   
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/ankit_script",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/X-itachi-X",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sdev-ankit/",
    }
  ];
  return (
    <div className="fixed border-4 rounded-3xl bottom-5 right-[45rem] items-center justify-center w-fit z-[99]">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

const ProjectCard = (
  {
    title,
    link,
    data
  }: {
    title: string;
    link: string;
    data: Array<any>;
  }
) => {
  return (
    
      <PinContainer
        title={title}
        href={link}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[90vw] md:w-[40rem] h-[50vh] md:h-[35rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-8 p-5 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 h-[10rem]" />
          <div className="w-full flex flex-row justify-between mt-4">
            <div className="flex flex-row items-start w-full"><AnimatedTooltip items={data} /></div>
            <div className="text-lg  flex-row bg-violet-600 hover:bg-indigo-600 text-white rounded-2xl w-fit whitespace-nowrap my-auto p-3 hover:scale-110 hidden md:flex"><IconSend className="mr-4 my-auto " size={30} color="white"/> View Live</div>
          </div>
        </div>
      </PinContainer>
    
  );
}


export default page