"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
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
import {
  IconBrandGithub,
  IconExchange,
  IconHome,
  IconNewSection,
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
  IconBrandDocker,
  IconBrandVscode,
  IconMessageFilled
} from "@tabler/icons-react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const page = () => {
  
  
  
  return (
    <div className="flex w-full">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 w-full h-full">
          <div className="flex gap-2">
           
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
                    <div className="flex flex-row h-fit">
                    <div className="relative top-5 left-0 w-fit ">
                    <div id="start" className="text-2xl md:text-7xl font-bold dark:text-white w-fit">
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
                    <button className="p-[3px] relative w-fit mt-[10rem] ml-[4rem]">
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        Lit up borders
                      </div>
                    </button>
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
                      {/* key skills */}
                    <div id="skills" className="text-2xl md:text-4xl font-bold dark:text-white h-fit w-full">
                      Key Skills
                      <div className="rounded-3xl p-4 m-4 flex flex-row backdrop-blur-2xl">
                              <BackgroundGradient className="rounded-[22px] w-[15rem] h-[14rem] max-w-sm p-4 sm:p-10 flex flex-col justify-center items-center">
                                <IconFileCode2 size={100} color="white" />
                                <div className="text-2xl mt-4">Languages</div>
                                
                              
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
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                          </div>
                          <div className="rounded-3xl p-4 m-4 flex flex-row backdrop-blur-2xl">
                              <BackgroundGradient className="rounded-[22px] w-[15rem] h-[14rem] max-w-sm p-4 sm:p-10 flex flex-col justify-center items-center">
                                <IconStackFront size={100} color="white" />
                                <div className="text-2xl mt-4">Front-End Key Skills</div>
                                
                              
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
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                          </div>
                          <div className="rounded-3xl p-4 m-4 flex flex-row backdrop-blur-2xl">
                              <BackgroundGradient className="rounded-[22px] w-[15rem] h-[14rem] max-w-sm p-4 sm:p-10 flex flex-col justify-center items-center">
                                <GiServerRack size={100} color="white" />
                                <div className="text-2xl mt-4">Back-End Key Skills</div>
                                
                              
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
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                          </div>
                          <div className="rounded-3xl p-4 m-4 flex flex-row backdrop-blur-2xl">
                              <BackgroundGradient className="rounded-[22px] w-[15rem] h-[14rem] max-w-sm p-4 sm:p-10 flex flex-col justify-center items-center">
                                <IconDatabaseCog size={100} color="white" />
                                <div className="text-2xl mt-4">DataBases</div>
                                
                              
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
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                              
                          </div>
                          <div className="rounded-3xl p-4 m-4 flex flex-row backdrop-blur-2xl">
                              <BackgroundGradient className="rounded-[22px] w-[15rem] h-[14rem] max-w-sm p-4 sm:p-10 flex flex-col justify-center items-center">
                                <FaConnectdevelop size={100} color="white" />
                                <div className="text-2xl mt-4">DevOps</div>
                                
                              
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
                              <Card title="" icon={<VscBlank size={100} />}>
                                <CanvasRevealEffect
                                  animationSpeed={5.1}
                                  containerClassName="bg-red-400"
                                />
                              </Card>
                              
                          </div>
                    </div>
                    <div id="projects" className="text-2xl md:text-4xl font-bold dark:text-white w-full border-yellow-400 border-4 h-fit">
                      Highlighted Projects
                    </div>
                    <div id="experience" className="text-2xl md:text-4xl font-bold dark:text-white w-full border-purple-400 border-4 h-fit">
                      Experience Snapshot
                    </div>
                    <div id="recommendations" className="text-2xl md:text-4xl font-bold dark:text-white w-full border-purple-400 border-4 h-fit">
                      Recommendations
                     

                    </div>
                    </div>
                    
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
                  Let's turn your vision into reality!
                  </Highlight>
                </motion.h1>
              </HeroHighlight>
              </div>
           
          </div>
          <div className="bg-red-400 hidden md:block">
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
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm mx-auto p-4 h-[14rem] w-[10rem] relative"
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
      title: "Recommendations",
      icon: (
        <IconMessageFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#recommendations",
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
    <div className="fixed border-4 rounded-3xl bottom-5 right-[45rem] items-center justify-center w-fit">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

export default page