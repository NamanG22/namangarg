'use client'
// import { Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "./components/Footer";

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const sectionGap = 0.15;
  const sectionLength = 0.2;

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

  const fourthSectionOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0, 1]);
  const fourthSectionY = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [50, 0]);
  const fourthSectionScale = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0.8, 1]);
  const fourthSectionPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], ["none", "auto"]);

  // const fifthSectionOpacity = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0, 1, 0]);
  // const fifthSectionY = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [50, 0, -50]);
  // const fifthSectionScale = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0.8, 1, 0.8]);
  // const fifthSectionPointerEvents = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], ["none", "auto", "none"]);  

  // const sixthSectionOpacity = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap), (11*sectionLength)-(5*sectionGap)], [0, 1, 0]);
  // const sixthSectionY = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap), (11*sectionLength)-(5*sectionGap)], [50, 0, -50]);
  // const sixthSectionScale = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap), (11*sectionLength)-(5*sectionGap)], [0.8, 1, 0.8]);
  // const sixthSectionPointerEvents = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap), (11*sectionLength)-(5*sectionGap)], ["none", "auto", "none"]);

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
        className='min-h-screen w-screen fixed top-0 left-0 bg-[position:75%_0%] sm:bg-[position:100%_100%]'
        style={{
          backgroundImage: "url('/bg.jpg')", 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          opacity: firstBackgroundOpacity,
          zIndex: 1,
          pointerEvents: firstBackgroundPointerEvents
        }}
      />
      <motion.div 
        className='min-h-screen w-screen fixed top-0 left-0 bg-[position:45%_0%] sm:bg-[position:45%_100%]'
        style={{
          backgroundImage: "url('/bg8.jpg')", 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          opacity: secondBackgroundOpacity,
          zIndex: 1,
          pointerEvents: secondBackgroundPointerEvents
        }}
      />

      <div ref={containerRef} className='min-h-[600vh] relative'> 
        <Header />
        {/* First Section */}
        <motion.div 
          className='h-screen w-screen fixed top-0 flex items-center justify-left px-10 sm:px-28'
          style={{
            opacity: firstSectionOpacity,
            zIndex: 20,
            pointerEvents: firstSectionPointerEvents
          }}
        >
          <motion.div 
            style={{ y: firstSectionY, scale: firstSectionScale, pointerEvents: firstSectionPointerEvents }}
            className='w-fit flex flex-col relative z-30'
          >
            <h1 className={`text-3xl sm:text-6xl roboto-mono`}>Hi, I&apos;m Naman</h1>
            <p className={`text-lg sm:text-2xl roboto-mono text-gray-400`}>I&apos;m a software engineer based in India</p>
            <div className='flex flex-row gap-4 mt-4'>
              <Link href="/about" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                <p className='text-sm sm:text-lg roboto-mono'>About Me</p>
              </Link>
              <Link href="/contact" className='text-white px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer relative'>
                <p className='text-sm sm:text-lg roboto-mono'>Get in touch</p>
              </Link>
            </div>
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
          className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 fixed top-0'
        >
          <motion.div 
            style={{ scale: secondSectionScale, pointerEvents: secondSectionPointerEvents }}
            className='max-w-xl flex'
          >
            <p className={`text-lg sm:text-2xl roboto-mono text-gray-300 leading-relaxed`}>
                nova {'%_'} <span className="text-blue-600">String</span> <span className="text-white text-3xl sm:text-6xl">about</span> = &quot; I&apos;m passionate about building beautiful and functional web applications.
              With expertise in modern web technologies, I create seamless user experiences
              that make a difference. &quot;;
            </p>
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
          className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: thirdSectionScale, pointerEvents: thirdSectionPointerEvents }}
            className='max-w-xl flex flex-col gap-6'
          >
            <div className="flex flex-col">
              <p className={`text-md sm:text-xl roboto-mono text-gray-400`}>
                nova {'%_'} HashMap{'<'}<span className="text-red-600">String</span>, <span className="text-red-600">String</span>{'>'} <span className="text-white text-3xl sm:text-6xl">education</span> = <span className="text-blue-600">new</span> HashMap();
              </p>
              <p className={`text-xl roboto-mono text-gray-300`}>
                {'{'}
              </p>
              <div className="ml-8 mt-4">
                <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  university: <span className="text-green-400">&quot;Delhi Technological University&quot;</span>,
                </p>
                <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  degree: <span className="text-green-400">&quot;Bachelor of Technology&quot;</span>,
                </p>
                <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  major: <span className="text-green-400">&quot;Information Technology&quot;</span>,
                </p>
                <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  duration: <span className="text-green-400">&quot;2021 - 2025&quot;</span>,
                </p>
                <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  cgpa: <span className="text-green-400">7.5</span>
                </p>
              </div>
              <p className={`text-md sm:text-xl roboto-mono text-gray-400 mt-4`}>{'}'}</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="min-h-screen w-screen flex flex-col items-center fixed justify-center px-10 sm:px-28" style={{
          opacity: fourthSectionOpacity,
          y: fourthSectionY,
          zIndex: 1,
          pointerEvents: fourthSectionPointerEvents
        }}>
        <motion.div className='flex flex-col sm:flex-row space-x-4 space-y-4 items-center justify-between w-full' style={{
          scale: fourthSectionScale, pointerEvents: fourthSectionPointerEvents
        }}>
          <div className='w-full sm:w-2/3'>
            <div className="flex flex-col roboto-mono">
              <p className="text-lg sm:text-2xl"> 
                <span className="">@Getter</span>
              </p>
              <p className="text-lg sm:text-2xl">
                <span className="">@Setter</span>
              </p>
              <p className="text-lg sm:text-2xl">
                <span className="text-gray-400">nova %_</span>{' '}
                <span className="text-purple-400">public</span>{' '}
                <span className="text-blue-400">class</span>{' '}
                <span className="text-white text-2xl sm:text-6xl">experience</span>{' '}
                <span className="">=</span>{' '}
                <span className="text-gray-400">{'{'}</span>
              </p>
              <div className="ml-8 mt-4 sm:space-y-2 text-md sm:text-xl">
                <p className="">
                  <span className="text-blue-400">String</span>{' '}
                  <span className="">company</span>
                  <span className="text-gray-400">;</span>
                </p>
                <p className="">
                  <span className="text-blue-400">String</span>{' '}
                  <span className="">position</span>
                  <span className="text-gray-400">;</span>
                </p>
                <p className="">
                  <span className="text-blue-400">Date</span>{' '}
                  <span className="">startDate</span>
                  <span className="text-gray-400">;</span>
                </p>
                <p className="">
                  <span className="text-blue-400">Date</span>{' '}
                  <span className="">endDate</span>
                  <span className="text-gray-400">;</span>
                </p>
                <p className="">
                  <span className="text-blue-400">String</span>{' '}
                  <span className="">description</span>
                  <span className="text-gray-400">;</span>
                </p>
                <p className="mt-4">
                  <span className="">@Override</span>
                </p>
                <p className="">
                  <span className="text-purple-400">public</span>{' '}
                  <span className="text-blue-400">String</span>{' '}
                  <span className="">toString</span>
                  <span className="text-gray-400">() {'{'}</span>
                </p>
                <div className="ml-8">
                  <p className="roboto-mono text-gray-400">...</p>
                </div>
                <p className="text-gray-400">{'}'}</p>
              </div>
              <p className="text-gray-400">{'}'}</p>
              <p className="mt-2 text-sm sm:text-xl">
                <span className="text-blue-400">experience</span>{' '}
                <span className="">exp1</span>{' '}
                <span className="">=</span>{' '}
                <span className="text-purple-400">new</span>{' '}
                <span className="text-blue-400">experience</span>
                <span className="text-gray-400">();</span>
              </p>
              <p className="text-sm sm:text-xl">
                <span className="text-blue-400">experience</span>{' '}
                <span className="">exp2</span>{' '}
                <span className="">=</span>{' '}
                <span className="text-purple-400">new</span>{' '}
                <span className="text-blue-400">experience</span>
                <span className="text-gray-400">();</span>
              </p>
              <p className="text-sm sm:text-xl">
                <span className="text-blue-400">experience</span>{' '}
                <span className="">exp3</span>{' '}
                <span className="">=</span>{' '}
                <span className="text-purple-400">new</span>{' '}
                <span className="text-blue-400">experience</span>
                <span className="text-gray-400">();</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-1/3 bg-black rounded-lg h-fit">
            <div className="flex justify-center w-full border-b border-white/10">
              <p className="text-xl roboto-mono text-gray-400 self-center">Terminal</p>
            </div>
            <p className="text-xl roboto-mono text-gray-400 w-full text-center">~/nova</p>
            <div className='w-full p-2 bg-gray-600 relative rounded-b-lg'>
              <p className="text-xl text-gray-400 absolute inset-0 pl-4 pt-3.5 pointer-events-none">
                nova {'%_'}
              </p>
              <input 
                type="text" 
                placeholder="" 
                className="w-full p-2 rounded-lg text-white bg-transparent border-none pl-24"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <Footer />

      </div>
    </>
  );
}
