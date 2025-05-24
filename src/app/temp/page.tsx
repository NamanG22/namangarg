'use client'
import Header from "../components/Header";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { FaJava, FaPython, FaReact, FaNode } from "react-icons/fa";
import { RiOpenaiFill } from "react-icons/ri";
import { SiGooglegemini, SiMongodb, SiNextdotjs, SiSpringboot } from "react-icons/si";
import { experienceData } from "@/data/experience";

export default function Temp() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [whichClicked, setWhichClicked] = useState(-1);

  const sectionGap = 0.1;
  const sectionLength = 0.15;

  // First section animations - slower fade out
  const firstSectionOpacity = useTransform(scrollYProgress, [0, sectionLength], [1, 0]);
  const firstSectionY = useTransform(scrollYProgress, [0, sectionLength], [0, -50]);
  const firstSectionScale = useTransform(scrollYProgress, [0, sectionLength], [1, 0.8]);
  const firstSectionPointerEvents = useTransform(scrollYProgress, [0, sectionLength], ["auto", "none"]);

  // Second section animations - more gradual fade in
  const secondSectionOpacity = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [0, 1, 0]);
  const secondSectionY = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [50, 0, -50]);
  const secondSectionScale = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [0.8, 1, 0.8]);
  const secondSectionPointerEvents = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], ["none", "auto", "none"]);

  // Third section animations
  const thirdSectionOpacity = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0, 1, 0]);
  const thirdSectionY = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [50, 0, -50]);
  const thirdSectionScale = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0.8, 1, 0.8]);
  const thirdSectionPointerEvents = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["none", "auto", "none"]);

  const fourthSectionOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [0, 1, 0]);
  const fourthSectionY = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [50, 0, -50]);
  const fourthSectionScale = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [0.8, 1, 0.8]);
  const fourthSectionPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], ["none", "auto", "none"]);

  const fifthSectionOpacity = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap)], [0, 1]);
  const fifthSectionY = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap)], [50, 0]);
  const fifthSectionScale = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap)], [0.8, 1]);
  const fifthSectionPointerEvents = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap)], ["none", "auto"]);

  const firstBackgroundOpacity = useTransform(scrollYProgress, [(2*sectionLength)-(sectionGap), (3*sectionLength)-(sectionGap), (4*sectionLength)-(sectionGap)], [1, 0, 0]);
  const firstBackgroundPointerEvents = useTransform(scrollYProgress, [(2*sectionLength)-(sectionGap), (3*sectionLength)-(sectionGap), (4*sectionLength)-(sectionGap)], ["auto", "none", "none"]);

  const secondBackgroundOpacity = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0, 1, 0]);
  const secondBackgroundPointerEvents = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["none", "auto", "none"]);

  const thirdBackgroundOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0, 1]);
  const thirdBackgroundPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], ["none", "auto"]);

  return (
    <>
        <Header/>

        <div className="relative">
            <div
                className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat -z-10"
                style={{ backgroundImage: "url('/bg.jpg')" }}
            />

            <div className="h-[200vh] flex flex-col justify-center items-center text-white">
                <div className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 z-20'>
                    <div className='max-w-xl flex flex-col relative z-30 space-y-4'>
                        <h1 className={`text-3xl sm:text-6xl roboto-mono`}>Hi, I&apos;m Naman</h1>
                        <p className={`text-md sm:text-xl roboto-mono text-gray-400`}>Based in India, I specialize in building web and mobile applications that make a difference</p>
                        <div className='flex flex-row gap-4 mt-4'>
                        <Link href="/about" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>About Me</p>
                        </Link>
                        <Link href="/contact" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Get in touch</p>
                        </Link>
                        </div>
                    </div>
                </div>
                <div className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 top-0 z-10'>
                    <div className='max-w-2xl flex flex-col gap-4'>
                        <div className={`text-md sm:text-xl roboto-mono text-gray-300 leading-relaxed flex flex-col gap-4`}>
                            <p className="text-white text-3xl sm:text-6xl block">About</p>
                            <div className="flex gap-4">
                            <div className='w-[10px] bg-gray-400 rounded-full'></div>
                            <div className="flex flex-col gap-4">
                                <p className="text-gray-300">
                                I&apos;m a developer with a passion for crafting web and mobile experiences that feel natural, fast, and meaningful. 
                                </p>
                                <p className="text-gray-300">
                                Whether it&apos;s building scalable apps, fine-tuning user flows, or connecting smooth interfaces with efficient backends—I build things that work and feel right.
                                </p>
                            </div>
                            </div>
                            <Link href="/about" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Learn More</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative h-[100vh] bg-black text-white flex justify-center items-center"
                style={{
                    backgroundImage: "url('/bg13.jpg')", 
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat",
                }}>
                    <div className='absolute w-full h-full bg-black/70 z-1'/>
                <div className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 top-0 z-5'>
                    <div className='max-w-2xl flex flex-col gap-6'>
                        <div className="flex flex-col space-y-4">
                        <p className={`text-md sm:text-xl roboto-mono text-gray-400`}>
                            <span className="text-white text-3xl sm:text-6xl">Education</span>
                        </p>
                        <div className="flex space-x-4">
                            <div className='w-[10px] bg-gray-400 rounded-full'></div>
                            <div className="space-y-4">
                            <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                            I&apos;m currently pursuing my undergraduate studies at Delhi Technological University (DTU), where I&apos;ve built a strong foundation in software engineering, system design, and product thinking.
                            </p>
                            <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                            Alongside my academics, I&apos;ve worked on real-world projects, internships, and startup ideas that bridge theory with impact.
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-4">

                        <Link href="/projects" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Academic Projects</p>
                            </Link>
                        <Link href="/projects" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Personal Projects</p>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-[100vh] bg-black text-white flex justify-center items-center"
                style={{
                    backgroundImage: "url('/bg13.jpg')", 
                    backgroundSize: "cover", 
                    backgroundRepeat: "no-repeat",
                }}>
                    <div className='absolute w-full h-full bg-black/70 z-1'/>
                <div className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 top-0 z-5'>
                    <div className='max-w-2xl flex flex-col gap-6'>
                        <div className="flex flex-col space-y-4">
                        <p className={`text-md sm:text-xl roboto-mono text-gray-400`}>
                            <span className="text-white text-3xl sm:text-6xl">Education</span>
                        </p>
                        <div className="flex space-x-4">
                            <div className='w-[10px] bg-gray-400 rounded-full'></div>
                            <div className="space-y-4">
                            <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                            I&apos;m currently pursuing my undergraduate studies at Delhi Technological University (DTU), where I&apos;ve built a strong foundation in software engineering, system design, and product thinking.
                            </p>
                            <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                            Alongside my academics, I&apos;ve worked on real-world projects, internships, and startup ideas that bridge theory with impact.
                            </p>
                            </div>
                        </div>
                        <div className="flex gap-4">

                        <Link href="/projects" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Academic Projects</p>
                            </Link>
                        <Link href="/projects" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                            <p className='text-sm sm:text-lg roboto-mono'>Personal Projects</p>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  );
}
