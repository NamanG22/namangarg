'use client'
// import { Dancing_Script, Roboto_Mono } from "next/font/google";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "../components/Footer";
import { SiComma } from "react-icons/si";
import { FaArrowUp, FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { PiBracketsCurly } from "react-icons/pi";
import { SiJupyter } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";


// const dancingScript = Dancing_Script({
//   variable: "--font-dancing-script",
//   subsets: ["latin"],
// });

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const sectionGap = 0.078;
  const sectionLength = 0.128;

  const scrollToSection = (sectionIndex: number) => {
    // Get the container element using the ref
    const container = containerRef.current;
    if (!container) return;
    
    // Calculate the total height of the container
    const containerHeight = container.getBoundingClientRect().height;
    
    // Calculate the target progress value based on the section animations
    let targetProgress;
    switch(sectionIndex) {
      case 0:
        targetProgress = 0;
        break;
      case 1:
        targetProgress = (2*sectionLength) - sectionGap;
        break;
      case 2:
        targetProgress = (4*sectionLength) - (2*sectionGap);
        break;
      case 3:
        targetProgress = (6*sectionLength) - (3*sectionGap);
        break;
      case 4:
        targetProgress = (8*sectionLength) - (4*sectionGap);
        break;
      case 5:
        targetProgress = (10*sectionLength) - (5*sectionGap);
        break;
      default:
        targetProgress = 0;
    }
    
    // Convert progress to actual pixels
    const targetScroll = targetProgress * containerHeight;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  const [selectedHobby, setSelectedHobby] = useState(-1);

  const handleHobbyClick = (index: number) => {
    setSelectedHobby(index);
  };

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

  const fifthSectionOpacity = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0, 1, 0]);
  const fifthSectionY = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [50, 0, -50]);
  const fifthSectionScale = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0.8, 1, 0.8]);
  const fifthSectionPointerEvents = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], ["none", "auto", "none"]);  

  const sixthSectionOpacity = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [0, 1]);
  const sixthSectionY = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [50, 0]);
  const sixthSectionScale = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [0.8, 1]);
  const sixthSectionPointerEvents = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], ["none", "auto"]);

//   const firstBackgroundOpacity = useTransform(scrollYProgress, [(4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [1, 0]);
//   const firstBackgroundPointerEvents = useTransform(scrollYProgress, [(4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["auto", "none"]);

//   const secondBackgroundOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0, 1]);
//   const secondBackgroundPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], ["none", "auto"]);
  // const firstBackgroundY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  // const firstBackgroundScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <>
      {/* Fixed Background */}
      <motion.div 
        className='min-h-screen w-screen fixed top-0 left-0'
        style={{
          backgroundImage: "url('/bg9.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          backgroundPositionX:"100%",
          backgroundPositionY:"100%",
        //   opacity: firstBackgroundOpacity,
          zIndex: 1,
        //   pointerEvents: firstBackgroundPointerEvents
        }}
      />

      <div ref={containerRef} className='min-h-[950vh] relative'> 
        <Header />
        <div className="fixed bottom-16 right-16 z-150 hover:cursor-pointer opacity-50">
          <button
            className="bg-white bg-opacity-10 backdrop-blur-sm p-3 rounded-full hover:bg-opacity-20 transition-all duration-300 hover:cursor-pointer"
            onClick={() => scrollToSection(0)}
          >
            <FaArrowUp className="text-2xl text-black" />
          </button>
        </div>
        {/* First Section */}
        <motion.div 
          id="hero-section"
          className='h-screen w-screen fixed top-0 flex items-center justify-center px-28 py-28'
          style={{
            opacity: firstSectionOpacity,
            zIndex: 20,
            pointerEvents: firstSectionPointerEvents
          }}
        >
          <motion.div 
            style={{ y: firstSectionY, scale: firstSectionScale, pointerEvents: firstSectionPointerEvents }}
            className='w-full flex relative z-30 items-center justify-between'
          >
            <div className='flex flex-col items-end justify-center gap-2 opacity-0'>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Hero</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Hero</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Story</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Story</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Quote</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Quote</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Skills</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Skills</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Achievements</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Achievements</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div className='flex items-center justify-center gap-2 hover:cursor-pointer'>
                <p>Hobbies</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
              <h1 className={`text-6xl roboto-mono`}>About Me</h1>
              <p className={`text-2xl roboto-mono text-gray-400`}>I&apos;m a software engineer based in India</p>
            </div>
            <div className='flex flex-col items-end justify-center gap-2 opacity-50'>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(0)}
              >
                <p>Hero</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Hero</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(1)}
              >
                <p>Story</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Story</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(2)}
              >
                <p>Quote</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Quote</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(3)}
              >
                <p>Skills</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Skills</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(4)}
              >
                <p>Achievements</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <p className='opacity-0'>Achievements</p>
                <div className='w-4 h-4 flex items-center justify-center'>
                  <div className='w-[1px] h-[50px] bg-gray-400'></div>
                </div>
              </div>
              <div 
                className='flex items-center justify-center gap-2 hover:cursor-pointer hover:opacity-100 transition-opacity duration-300'
                onClick={() => scrollToSection(5)}
              >
                <p>Hobbies</p>
                <div className='w-4 h-4 rounded-full bg-white'></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Second section */}
        <motion.div 
          id="story-section"
          style={{
            opacity: secondSectionOpacity,
            y: secondSectionY,
            zIndex: 10,
            pointerEvents: secondSectionPointerEvents
          }}
          className='h-screen w-screen flex items-center justify-left px-28 fixed top-0'
        >
          <motion.div 
            style={{ scale: secondSectionScale, pointerEvents: secondSectionPointerEvents }}
            className='w-full space-y-16 flex flex-col justify-center items-center px-24'
          >
            <div className='flex w-full text-center'>
                <p className='text-md roboto-mono'>Hi, I&apos;m Naman. A final-year Information Technology student at Delhi Technological University, and a passionate software engineer building web & mobile products that matter.</p>
            </div>
            <div className='flex w-full'>
                <div className='w-1/2'>
                </div>
                <div className='w-1/2'>
                    <p className='text-md roboto-mono'>Ever since my first &quot;Hello, World&quot;, I&apos;ve been hooked on how software can transform ideas into real-world impact. I gravitate toward projects that push me to learn, iterate, and innovate.</p>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-1/2'>
                    <p className='text-md roboto-mono'>
                    When I&apos;m not coding, you&apos;ll find me mentoring juniors, writing technical blogs, or breaking down math puzzles—activities that sharpen my problem-solving and help me give back.
                    </p>
                </div>
                <div className='w-1/2'>
                </div>
            </div>
            <div className='flex w-full text-center'>
                <p className='text-md roboto-mono'>I&apos;m always looking to team up on exciting challenges, explore emerging technologies, and deliver user-centric solutions.</p>
            </div>
            
          </motion.div>
        </motion.div>

        {/* Third section */}
        <motion.div 
          id="quote-section"
          style={{
            opacity: thirdSectionOpacity,
            y: thirdSectionY,
            zIndex: 5,
            pointerEvents: thirdSectionPointerEvents
          }}  
          className='h-screen w-screen flex items-center justify-left px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: thirdSectionScale, pointerEvents: thirdSectionPointerEvents }}
            className='flex w-full'
          >
            <div className="flex">
              <div className='w-1/2 flex flex-col space-y-4'>
                <div className='flex -space-x-3'>
                        <SiComma className='text-2xl transform rotate-180'/>
                        <SiComma className='text-2xl transform rotate-180'/>
                </div>
                <p className={`text-3xl roboto-mono-italic flex pl-12 pr-4`}>
                Every time I was overwhelmed—by pain, overthinking, or emotions—I chose to build. My projects aren&apos;t just work; they&apos;re reflections of the moments I survived.
                </p>
                <p className='text-md roboto-mono flex pl-12 text-gray-400'>
                    - Naman Garg, forever in beta
                </p>
                <div className='flex -space-x-3 w-full justify-end'>
                        <SiComma className='text-2xl'/>
                        <SiComma className='text-2xl'/>
                </div>
              </div>
              <div className='w-1/2'>
                
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Fourth section */}
        <motion.div 
          id="skills-section"
          style={{
            opacity: fourthSectionOpacity,
            y: fourthSectionY,
            zIndex: 5,
            pointerEvents: fourthSectionPointerEvents
          }}  
          className='h-screen w-screen flex items-center justify-left px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: fourthSectionScale, pointerEvents: fourthSectionPointerEvents }}
            className='flex flex-col w-full space-y-6'
          >
            <div className='text-white w-full text-center'>
                <h1 className='text-6xl roboto-mono'>Skills & Technologies</h1>
                <p className='text-2xl roboto-mono text-gray-400'>Languages, libraries, and frameworks that help me turn caffeine into code.</p>
            </div>

            <div className='flex flex-row gap-6 justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaJava className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Java</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaPython className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Python</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaHtml5 className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>HTML</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaCss3Alt className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>CSS</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <IoLogoJavascript className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>JavaScript</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaBootstrap className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Bootstrap</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <RiTailwindCssFill className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Tailwind CSS</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiTypescript className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>TypeScript</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaNode className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Node.js</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaReact className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>React</p>
                </div>
            </div>
            
            <div className='flex flex-row gap-4 justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiNextdotjs className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Next.js</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiVite className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Vite</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiSpringboot className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Spring Boot</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <GrMysql className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>SQL</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiMongodb className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaGitAlt className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Git</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiPostman className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Postman</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <VscVscode className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>VS Code</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiIntellijidea className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>IntelliJ IDEA</p>
                </div>
            </div>
            
            <div className='flex flex-row gap-4 justify-center items-center'>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <FaDocker className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Docker</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <PiBracketsCurly className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>DSA</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiJupyter className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Jupyter</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <SiGooglegemini className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>Gemini</p>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center rounded-full bg-white p-4'>
                        <RiOpenaiFill className='text-6xl text-black' />
                    </div>
                    <p className='text-md roboto-mono'>OpenAI</p>
                </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Fifth section */}
        <motion.div 
          id="achievements-section"
          style={{
            opacity: fifthSectionOpacity,
            y: fifthSectionY,
            zIndex: 5,
            pointerEvents: fifthSectionPointerEvents
          }}  
          className='h-screen w-screen flex items-center justify-left px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: fifthSectionScale, pointerEvents: fifthSectionPointerEvents }}
            className='flex flex-col w-full space-y-6 items-center justify-center'
          >
            <div className='text-white w-full text-center'>
                <h1 className='text-6xl roboto-mono'>Achievements / Certifications</h1>
                <p className='text-2xl roboto-mono text-gray-400'>Proof that persistence pays off—and learning never stops.</p>
            </div>
            <div className='text-white w-full flex overflow-hidden -space-x-44 items-center justify-center'>
                <iframe src="/cert/java_basic.pdf" className='h-[230px] hover:z-10' />
                <iframe src="/cert/problem_solving_basic.pdf" className='h-[230px] hover:z-10' />
                <iframe src="/cert/NaukriCampus_Certificate_Participation.pdf" className='h-[230px] hover:z-10' />
                <iframe src="/cert/FlipkartGrid5.0.pdf" className='h-[213px] hover:z-10' />
                <iframe src="/cert/CoPHackOnAmazonSeason-4.pdf" className='h-[213px] hover:z-10' />
                <iframe src="/cert/Coding_Ninjas - Ninja_Slayground.pdf" className='h-[230px] hover:z-10' />
                <iframe src="/cert/Codekaze-Round1.pdf" className='h-[230px] hover:z-10' />
                <iframe src="/cert/Codekaze-Round2.pdf" className='h-[230px] hover:z-10' />
            </div>
            <div className='text-white w-full text-left flex items-center justify-between'>
              <ul className='flex flex-col list-disc'>
                <li className='text-lg roboto-mono'>Solved 600+ DSA questions on LeetCode, CNStudio, and geeksforgeeks.</li>
                <li className='text-lg roboto-mono'> 1557 Rating on LeetCode, 1093 - Institute Ranking on GFG among 11262 Students. </li>
                <li className='text-lg roboto-mono'>Rank - 2 in a State Level Mathematics Olympiad.</li>
              </ul>
              <div className="h-full flex flex-col items-center justify-center">
                <img src="/achievements/lc.png" alt="lc" className="h-[200px] object-cover" />
                <img src="/achievements/gfg.png" alt="gfg" className="h-[150px] object-cover -mt-30 -translate-x-10" />
                <img src="/achievements/maths.jpg" alt="maths" className="h-[200px] object-cover -mt-54 translate-x-30" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Sixth section */}
        <motion.div 
          id="hobbies-section"
          style={{
            opacity: sixthSectionOpacity,
            y: sixthSectionY,
            zIndex: 5,
            pointerEvents: sixthSectionPointerEvents
          }}  
          className='h-screen w-screen flex items-center justify-left px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: sixthSectionScale, pointerEvents: sixthSectionPointerEvents }}
            className='flex flex-col w-full space-y-6 justify-center items-center h-full'
          >
            <div className='text-white w-full text-center self-top self-start'>
                <h1 className='text-6xl roboto-mono'>Hobbies</h1>
                <p className='text-2xl roboto-mono text-gray-400'>A peek into the things I enjoy when I&apos;m not building or debugging.</p>
            </div>
            <div className='flex w-full items-center h-[450px] justify-between'>
              <div className='flex flex-col items-center justify-center w-[350px] space-y-4'>
                <div className='flex flex-col items-center justify-center rounded-lg p-2 py-4 space-y-2 border hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => handleHobbyClick(0)}>
                  <h1 className='text-2xl roboto-mono'>Stargazing & Astronomy</h1>
                  <p className='text-sm roboto-mono text-center'>Endlessly curious about the universe—stars, black holes, and everything in between.</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded-lg p-4 space-y-2 border hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => handleHobbyClick(1)}>
                  <h1 className='text-2xl roboto-mono'>Drawing & Sketching</h1>
                  <p className='text-sm roboto-mono text-center'>Sketching helps me unwind and express ideas beyond code.</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <img src="/hobbies/space.jpg" alt="space" className={`absolute h-[300px] object-cover z-0`} />
                <img src="/hobbies/sketch.jpg" alt="sketch" className={`absolute h-[350px] object-cover z-0`} />
                <img src="/hobbies/music.jpg" alt="music" className={`absolute h-[320px] object-cover z-0`} />
                <img src="/hobbies/manga.jpg" alt="manga" className={`absolute h-[300px] object-cover z-0`} />
              </div>
              <div className='flex flex-col items-center justify-center w-[350px] space-y-4'>
                <div className='flex flex-col items-center justify-center rounded-lg p-4 space-y-2 border hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => handleHobbyClick(2)}>
                  <h1 className='text-2xl roboto-mono'>Music & Mood</h1>
                  <p className='text-sm roboto-mono text-center'>From lo-fi to rock—music fuels my focus and creativity.</p>
                </div>
                <div className='flex flex-col items-center justify-center rounded-lg p-4 space-y-2 border hover:cursor-pointer hover:bg-white hover:text-black transition-all duration-300' onClick={() => handleHobbyClick(3)}>
                  <h1 className='text-2xl roboto-mono'>Anime & Storytelling</h1>
                  <p className='text-sm roboto-mono text-center'>A huge fan of thoughtful plots, great animation, and unforgettable characters.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      <Footer />

      </div>
    </>
  );
}
