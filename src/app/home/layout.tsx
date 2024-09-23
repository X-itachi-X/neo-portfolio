"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  IconBrandGoogleHome,
  IconBriefcaseFilled,
  IconCertificate,
  IconSettingsCheck,
  IconTrophyFilled,
  IconAddressBook,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import icon from "@/assets/WhatsApp Image 2023-01-18 at 18.43.50(1).jpg"
import { TerminalIcon } from "lucide-react";

export default function HomeLayout({
    children,
}:Readonly<{
  children: React.ReactNode;
}>) {
    const links = [
        {
          label: "Homepage",
          href: "/home",
          icon: (
            <IconBrandGoogleHome className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Projects",
          href: "/home/projects",
          icon: (
            <IconSettingsCheck className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },{
          label: "Skill Sets",
          href: "/home/skills",
          icon: (
            <TerminalIcon className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Experience",
          href: "/home/experience",
          icon: (
            <IconBriefcaseFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
          label: "Certifications",
          href: "/home/certifications",
          icon: (
            <IconCertificate className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
          ),
        },
        {
            label: "Achievements",
            href: "/home/achievements",
            icon: (
              <IconTrophyFilled className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
          },
          {
            label: "Contact Me",
            href: "/home/contacts",
            icon: (
              <IconAddressBook className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
          },
      ];
      const [open, setOpen] = useState(false);
      const [DashboardSkeleton, setDashboardSkeleton] = useState(true)

      setInterval(() => {
        setDashboardSkeleton(false)
      }, 500);
    return (
        
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen w-screen md:min-w-screen overflow-y-auto md:overflow-hidden" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
        > 
        <div className="hidden md:block">
          <Sidebar open={open} setOpen={setOpen}>
            <SidebarBody className="justify-between gap-10">
              <div className="flex flex-col flex-1 overflow-hidden">
                {open ? <Logo /> : <LogoIcon />}
                <div className="mt-8 flex flex-col gap-2" >
                  {links.map((link, idx) => (
                    <SidebarLink key={idx} link={link}/>
                  ))}
                </div>
              </div>
              <div>
                <SidebarLink
                  link={{
                    label: "Ankit Prakash",
                    href: "/home/timeline",
                    icon: (
                      <Image
                        src={icon}
                        className="h-7 w-7 flex-shrink-0 rounded-full"
                        width={50}
                        height={50}
                        alt="Avatar"
                      />
                    ),
                  }}
                />
              </div>
            </SidebarBody>
          </Sidebar>
        </div>
      
      {DashboardSkeleton?
      (<Dashboard />)
      : 
      (
       children
       
      )
      
      }
      
    </div>

    )
}
 const Logo = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-medium text-black dark:text-white whitespace-pre"
        >
          
        </motion.span>
      </Link>
    );
  };

 const LogoIcon = () => {
    return (
      <Link
        href="#"
        className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
      >
        <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
      </Link>
    );
  };

  // Dummy dashboard component with content
const Dashboard = () => {
    return (
      <div className="flex flex-1">
        <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {[...new Array(4)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
          <div className="flex gap-2 flex-1">
            {[...new Array(2)].map((i) => (
              <div
                key={"second-array" + i}
                className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  };