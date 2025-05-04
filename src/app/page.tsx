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

  const firstBackgroundOpacity = useTransform(scrollYProgress, [(2*sectionLength)-(sectionGap), (3*sectionLength)-(sectionGap), (4*sectionLength)-(sectionGap)], [1, 0, 0]);
  const firstBackgroundPointerEvents = useTransform(scrollYProgress, [(2*sectionLength)-(sectionGap), (3*sectionLength)-(sectionGap), (4*sectionLength)-(sectionGap)], ["auto", "none", "none"]);

  const secondBackgroundOpacity = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0, 1, 0]);
  const secondBackgroundPointerEvents = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["none", "auto", "none"]);

  const thirdBackgroundOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], [0, 1]);
  const thirdBackgroundPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap)], ["none", "auto"]);
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
        className='min-h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-[position:45%_0%] sm:bg-[position:45%_100%]'
        style={{
          opacity: secondBackgroundOpacity,
          zIndex: 1,
          pointerEvents: secondBackgroundPointerEvents
        }}
      >
        <motion.div className='relative w-full min-h-screen '>
          <motion.div className='absolute w-full h-full bg-[position:80%_30%]' style={{
            backgroundImage: "url('/bg13.jpg')", 
            backgroundSize: "cover", 
            backgroundRepeat: "no-repeat",
            opacity: secondBackgroundOpacity,
            zIndex: 1,
            pointerEvents: secondBackgroundPointerEvents
          }}
          />
          <div className='absolute w-full h-full bg-black/70 z-1'/>
        </motion.div>
      </motion.div>
      <motion.div 
        className='min-h-screen w-screen fixed top-0 left-0 bg-[position:45%_0%] sm:bg-[position:45%_100%]'
        style={{
          backgroundImage: "url('/bg8.jpg')", 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          opacity: thirdBackgroundOpacity,
          zIndex: 1,
          pointerEvents: thirdBackgroundPointerEvents
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
            className='max-w-xl flex flex-col relative z-30 space-y-4'
          >
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
            className='max-w-2xl flex flex-col gap-4'
          >
            <div className={`text-md sm:text-xl roboto-mono text-gray-300 leading-relaxed flex flex-col gap-4`}>
                <p className="text-white text-3xl sm:text-6xl block">About</p>
                <p className="text-gray-300">
                I&apos;m a developer with a passion for crafting web and mobile experiences that feel natural, fast, and meaningful. Whether it&apos;s building scalable apps, fine-tuning user flows, or connecting smooth interfaces with efficient backends—I build things that work and feel right.
                </p>
                <Link href="/contact" className='text-white w-fit px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-black transition-all duration-300 relative'>
                  <p className='text-sm sm:text-lg roboto-mono'>Learn More</p>
                </Link>
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
          className='h-screen w-screen flex items-center justify-left px-10 sm:px-28 fixed top-0'
        >

          <motion.div
            style={{ scale: thirdSectionScale, pointerEvents: thirdSectionPointerEvents }}
            className='max-w-2xl flex flex-col gap-6'
          >
            <div className="flex flex-col space-y-4">
              <p className={`text-md sm:text-xl roboto-mono text-gray-400`}>
                <span className="text-white text-3xl sm:text-6xl">Education</span>
              </p>
              <div className="flex space-x-4">
                <div className='w-[10px] bg-gray-400 rounded-full'></div>
                <div className="space-y-4">
                  <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  I'm currently pursuing my undergraduate studies at Delhi Technological University (DTU), where I’ve built a strong foundation in software engineering, system design, and product thinking.
                  </p>
                  <p className={`text-md sm:text-xl roboto-mono text-gray-300`}>
                  Alongside my academics, I've worked on real-world projects, internships, and startup ideas that bridge theory with impact.
                  </p>
                </div>
              </div>
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
