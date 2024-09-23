import React from 'react'
import { Button } from './ui/moving-border';
import exp1 from '@/assets/exp1.gif';
import exp2 from '@/assets/exp2.gif';
import exp3 from '@/assets/exp3.gif';
import exp4 from '@/assets/exp4.gif';
import Image from 'next/image';

const Experience = () => {
     const workExperience = [
        {
            id: 1,
            title: "Manoindia — Lead Developer",
            date: "(July 2024 – Present)",
            tech: "Next.js, Node.js, WebSockets, PostgreSQL",
            points: [
              "Led the development of an advertising platform from scratch...",
              "Architected and implemented real-time features...",
              "Designed a multi-role system with three user types...",
              "Collaborated with a team of developers...",
              "Enhanced platform performance by optimizing SQL queries..."
            ],
            className: "md:col-span-2",
            thumbnail: exp1,
          },
          {
            id: 2,
            title: "Manoindia — Lead Developer",
            date: "(July 2024 – Present)",
            tech: "Next.js, Node.js, WebSockets, PostgreSQL",
            points: [
              "Led the development of an advertising platform from scratch...",
              "Architected and implemented real-time features...",
              "Designed a multi-role system with three user types...",
              "Collaborated with a team of developers...",
              "Enhanced platform performance by optimizing SQL queries..."
            ],
            className: "md:col-span-2",
            thumbnail: exp2,
          },
          {
            id: 3,
            title: "Manoindia — Lead Developer",
            date: "(July 2024 – Present)",
            tech: "Next.js, Node.js, WebSockets, PostgreSQL",
            points: [
              "Led the development of an advertising platform from scratch...",
              "Architected and implemented real-time features...",
              "Designed a multi-role system with three user types...",
              "Collaborated with a team of developers...",
              "Enhanced platform performance by optimizing SQL queries..."
            ],
            className: "md:col-span-2",
            thumbnail: exp3,
          },
          {
            id: 4,
            title: "Manoindia — Lead Developer",
            date: "(July 2024 – Present)",
            tech: "Next.js, Node.js, WebSockets, PostgreSQL",
            points: [
              "Led the development of an advertising platform from scratch...",
              "Architected and implemented real-time features...",
              "Designed a multi-role system with three user types...",
              "Collaborated with a team of developers...",
              "Enhanced platform performance by optimizing SQL queries..."
            ],
            className: "md:col-span-2",
            thumbnail: exp4,
          },
      ];
  return (
    

    <div className="mt-12 gap-10 grid grid-cols-4">
        {workExperience.map((card)=> (
            <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800 p-10 w-full'
            >
                <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full'>
                <Image src={card.thumbnail} alt="img" width={240} height={240}/>
                    <div className="w-full">
                    <h1 className="text-start text-xl md:text-2xl font-bold">{card.title}</h1>
                    <p className="text-start text-white-100 mt-3 font-semibold">
                        <p className="italic"><em>{card.date}</em></p><br/>
                        <p><strong>Technologies:</strong> {card.tech}</p><br/>
                        <ul className="list-disc pl-5">
                        {card.points.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                        </ul>
                    </p>
                    </div>

                </div>
            </Button>
        ))}
    </div>

  )
}

export default Experience