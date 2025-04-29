'use client'
// import { Roboto_Mono } from "next/font/google";
import Header from "../components/Header";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";
import { SiComma } from "react-icons/si";
import { FaJava } from "react-icons/fa";
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

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const sectionGap = 0.078;
  const sectionLength = 0.128;

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

  const firstBackgroundOpacity = useTransform(scrollYProgress, [(4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [1, 0]);
  const firstBackgroundPointerEvents = useTransform(scrollYProgress, [(4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["auto", "none"]);

  const secondBackgroundOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0, 1]);
  const secondBackgroundPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], ["none", "auto"]);
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

      <div ref={containerRef} className='min-h-[900vh] relative'> 
        <Header />
        {/* First Section */}
        <motion.div 
          className='h-screen w-screen fixed top-0 flex items-center justify-center px-28 py-28'
          style={{
            opacity: firstSectionOpacity,
            zIndex: 20,
            pointerEvents: firstSectionPointerEvents
          }}
        >
          <motion.div 
            style={{ y: firstSectionY, scale: firstSectionScale, pointerEvents: firstSectionPointerEvents }}
            className='w-full flex flex-col relative z-30 items-center justify-center'
          >
            <h1 className={`text-6xl roboto-mono`}>About Me</h1>
            <p className={`text-2xl roboto-mono text-gray-400`}>I&apos;m a software engineer based in India</p>
            {/* <div className='flex flex-row gap-4 mt-4'>
              <Link href="/about" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                <p className='roboto-mono'>About Me</p>
              </Link>
              <Link href="/contact" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                <p className='roboto-mono'>Get in touch</p>
              </Link>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Second section */}
        <motion.div 
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
                <p className='text-md roboto-mono'>Hi, I&apos;m Naman, a passionate Software Engineer with a strong foundation in Computer Science. Currently, I&apos;m a final-year student at Delhi Technological University (DTU) majoring in Information Technology.</p>
            </div>
            <div className='flex w-full'>
                <div className='w-1/2'>
                </div>
                <div className='w-1/2'>
                    <p className='text-md roboto-mono'>Ever since I wrote my first &quot;Hello World&quot; program, I&apos;ve been captivated by the endless possibilities technology can unlock. I love working on projects that challenge me to grow and innovate.</p>
                </div>
            </div>
            <div className='flex w-full'>
                <div className='w-1/2'>
                    <p className='text-md roboto-mono'>
                    Beyond coding, I enjoy sharing knowledge — mentoring juniors, writing blogs, and sometimes teaching mathematics, which has strengthened my problem-solving mindset even further.
                    </p>
                </div>
                <div className='w-1/2'>
                </div>
            </div>
            <div className='flex w-full text-center'>
                <p className='text-md roboto-mono'>I&apos;m always eager to collaborate on exciting projects, learn new technologies, and contribute to impactful solutions.
                If you&apos;d like to work together, feel free to reach out through my contact page! </p>
            </div>
            
          </motion.div>
        </motion.div>

        {/* Third section */}
        <motion.div 
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
                <p className='text-5xl birthstone flex pl-12 pr-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam assumenda odio temporibus iure distinctio tempora ab corrupti!
                </p>
                <p className='text-md roboto-mono flex pl-12 text-gray-400'>
                    Naman Garg, forever in beta
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
                <p className='text-2xl roboto-mono text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
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
            className='flex flex-col w-full space-y-6'
          >
            <div className='text-white w-full text-center'>
                <h1 className='text-6xl roboto-mono'>Achievements / Certifications</h1>
                <p className='text-2xl roboto-mono text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
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
                <p className='text-2xl roboto-mono text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
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

        {/* Sixth section */}
        <motion.div 
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
            className='flex flex-col w-full space-y-6'
          >
            <div className='text-white w-full text-center'>
                <h1 className='text-6xl roboto-mono'>Hobbies</h1>
                <p className='text-2xl roboto-mono text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos</p>
            </div>
          </motion.div>
        </motion.div>

      <Footer />

      </div>
    </>
  );
}
