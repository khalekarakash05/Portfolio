"use client";
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiExpress, SiGit, SiGithub, SiJavascript, SiMongodb, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPrisma, SiReact, SiTailwindcss, SiThealgorithms, SiTypescript } from 'react-icons/si'
import { text } from 'stream/consumers'

const Skills = () => {
    const skills = [
        {
            text: "React",
            Icon:  SiReact
        },
        {   
            text: "Next.js",
            Icon: SiNextdotjs
        },
        {
            text: "Tailwind CSS",
            Icon: SiTailwindcss,
        }, 
        {
            text: "Node.js",
            Icon: SiNodedotjs
        },
        {
            text: "Express.js",
            Icon: SiExpress,
        },
        {
            text: "MongoDB",
            Icon: SiMongodb
        },
        {
            text: "JavaScript",
            Icon: SiJavascript
        },
        {
            text: "PostgreSQL",
            Icon: SiPostgresql
        },
        {
            text: "TypeScript",
            Icon: SiTypescript
        },
        {
            text: "Prisma",
            Icon: SiPrisma
        },
        {
            text: "DSA",
            Icon: SiThealgorithms
        },
        {
            text: "Github",
            Icon: SiGithub
        }
    ]
  return (
    <div className='max-w-5xl mx-auto px-8'>
        <Title  text="Skills 🚀" className='relative p-4 flex flex-col 
        items-center justify-center '  width="20"></Title>


        <HoverEffect items={skills}></HoverEffect>
    </div>
  )
}

export default Skills