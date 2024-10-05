import { FloatingDock } from '@/components/ui/floating-dock';
import { cn } from '@/lib/utils';
import { div } from 'framer-motion/client';
import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLeetcode, SiLinkedin, SiX } from "react-icons/si";
import { IoHomeOutline } from "react-icons/io5";

const Navbar = ({ className }: { className?: string }) => {
    const socials = [
        {
            href: "/",
            title: "Home",
            icon: <IoHomeOutline></IoHomeOutline>
        },
        {
            href: "https://www.linkedin.com/in/akash-khalekar-239152284/",
            title: "LinkedIn",
            icon: <SiLinkedin />,
        },
        {
            href: "https://www.github.com/khalekarakash05",
            title: "GitHub",
            icon: <SiGithub />,
        },
        {
            href: "https://twitter.com/khalekarakash05",
            title: "X",
            icon: <SiX />,
        },
        {
            href: "https://leetcode.com/u/akashkhalekar",
            title: "LeetCode",
            icon: <SiLeetcode></SiLeetcode>
        }
    ];
  
    return (
        
        <nav
            className={cn(
                `relative flex items-center h-20  border-b-[1px] border-b-richblack-700 transition-all duration-200 fixed top-0 w-full z-40 bg-transparent`, 
                className
            )}
        >
            {/* Left-aligned h1 (hidden on small screens) */}
            <div className="flex-1">
                <h1 className="hidden ml-16  sm:block text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2">
                    Akash Khalekar 🧑‍💻
                </h1>
            </div>

            {/* Center-aligned FloatingDock */}
            <div className="absolute flex justify-center items-center left-2/4 lg:left-1/2 transform -translate-x-1/2">
                <FloatingDock
                    items={socials}
                    desktopClassName="flex space-x-4"
                    mobileClassName="flex space-x-4"
                />
            </div>

            {/* Right side empty or for future use */}
            <div className="flex-1"></div>
        </nav>







    );
};

export default Navbar;

