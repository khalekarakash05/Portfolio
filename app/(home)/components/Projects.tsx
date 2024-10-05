import React from 'react'
import { SiCloudinary, SiExpress, SiGithub, SiMongodb, SiNodedotjs, SiReact, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { CardBody, CardContainer, CardItem,  } from '@/components/ui/direction-aware-hover'

const Projects = () => {
    const projects =[
        {
            title: "Study Notion",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress, SiCloudinary],
            link: "https://github.com/khalekarakash05/StudyNotion",
            cover: "/StudyNotion.webp",
            background: "bg-[#4682B4]",
            desc: "Study Notion is an online learning platform where instructors can create and sell courses. Students can purchase courses, track their progress, and leave reviews to enhance their learning experience.                                                                  ",
            githubIcon: SiGithub

        },
        {
            title: "SIH 2023 - Smart Farmer",
            tech: [SiReact, SiTailwindcss, SiNodedotjs, SiMongodb, SiExpress],
            link:"https://github.com/khalekarakash05/SIH_Project",
            cover: "/Smart_Farmer.webp",
            background: "bg-[#32CD32]",
            desc: "Smart Farmer is a platform that allows farmers to upload images of diseased plants. Experts analyze the images and provide solutions, helping farmers effectively manage and treat their crops.",
            githubIcon: SiGithub
        },
        {
            title: "Youtube Backend",
            tech: [SiNodedotjs, SiMongodb, SiExpress],
            link:"https://github.com/khalekarakash05/You-tube_Backend",
            cover: "/youtube-backend.jpg",
            background: "bg-[#708090]",
            desc: "YouTube Backend is a platform that implements essential user functionalities. Features include user registration, login, profile management, watch history, and updates for avatars and cover images.",
            githubIcon: SiGithub
        },
        {
            title: "Shopping Cart",
            tech: [SiReact, SiTailwindcss],
            link:"https://github.com/khalekarakash05/Shopping-Cart",
            cover: "/Shopping-Cart.jpg",
            background: "bg-[#4169E1]",
            desc: "The Shopping Cart project is a frontend application that implements essential shopping functionalities. Users can add and remove products, view their cart, and see the total price of selected items.",
            githubIcon: SiGithub
        }
    ]
  return (
    <div className='py-10 p-5 sm:p-0'>

        <Title  text="My Projects" className='relative p-4 flex flex-col 
        items-center justify-center '  width="32"></Title>

        <div className='grid grid-cols-1 -gap-y-20 lg:-gap-y-0 sm:grid-cols-2 pt-20 lg:gap-0 '>
            {projects.map((project, idx) => {
                
                return <Link href={`${project.link}`} key={idx} >
                        {/* <div className={cn("p-5 rounded-md", project.background)}>
                            {/* <DirectionAwareHover imageUrl={project.cover} >
                                <h1>{project.title}</h1>
                            </DirectionAwareHover> */}
                        {/* </div> */} 

                        <CardContainer className={cn("p-5 rounded-md", project.background)}>
                            <CardBody>
                                <CardItem>
                                    <img src={project.cover} alt={project.title} className="object-cover w-full h-48 rounded-md
                                    cursor-pointer" />
                                    <h2 className="text-lg font-bold mt-2">{project.title}</h2>
                                    <p className='text-green-200'>{project.desc}</p>
                                    <div className="flex space-x-2 mt-1">
                                        {project.tech.map((TechIcon, techIdx) => (
                                            <TechIcon key={techIdx} className="h-5 w-5 text-white" />
                                        ))}
                                    </div>
                                    <div  className="flex space-x-2 mt-2">
                                        <project.githubIcon className="h-5 w-5 text-white" />
                                        <span className="text-white">Github</span>
                                    </div >
                                </CardItem>
                            </CardBody>
                        </CardContainer>
                </Link>
            })}
        </div>
    </div>
  )
}

export default Projects