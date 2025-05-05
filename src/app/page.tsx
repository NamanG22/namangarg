'use client'
// import { Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "./components/Footer";

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

const experienceData = [
  {
    id: 1,
    title: "DTU Supermileage Team",
    position: "Team Member",
    duration: "MARCH 2022 - JANUARY 2023",
    description: ["Contributed to the development of supermileage vehicles, reducing carbon emissions by 15% through the use of next-generation fuels and advanced safety features.",
    "Competed at the international level, improving vehicle fuel efficiency by 25% and achieving speeds 10% faster than previous models."],
  },
  {
    id: 2,
    title: "Mathematics Teacher",
    position: "Teacher",
    duration: "OCTOBER 2022 - FEBRUARY 2024",
    description: ["Mentored students in mathematics, improving their understanding of the subject and their ability to apply it to real-world problems.",
    "Developed a curriculum that was tailored to the needs of the students, ensuring that they were able to understand the material and apply it to their own work."],
  },
  {
    id: 3,
    title: "Placewit",
    position: "Student Outreach Consultant",
    duration: "SEPTEMBER 2023 - MARCH 2024",
    description:["Led brainstorming sessions to generate innovative strategies, resulting in actionable plans that improved placement success rates by 15%."],
  },
  {
    id: 4,
    title: "Mediawave Pvt. Ltd.",
    position: "Software Developer Intern",
    duration: "JULY 2024 - AUGUST 2024",
    description:["Collaborated with a team of 5 to develop backend systems using Spring Boot and Firebase, improving data retrieval efficiency by 30% and reducing response time by 25%.",
      "Designed and documented a set of many RESTful APIs that improved efficiency and reduced the need for manual data entry by 40%, allowing focus on higher-value tasks.",
      "Contributed to the successful deployment, version control and monitoring of backend services in a production environment.",
      "Created a comprehensive documentation system for data transfer protocols, providing clarity and guidance for 10+ team members, which has led to a 50% reduction inonboarding time for new staff."],
  },
  {
    id: 5,
    title: "SanteSYS - A DTU Startup",
    position: "Technical Lead",
    duration: "NOVEMBER 2024",
    description:["Worked on building a healthcare-focused platform to improve digital accessibility and preventive care. ","Santesys aimed to simplify patient engagement and streamline health services for clinics and hospitals."],
  },
  {
    id: 6,
    title: "Paytm",
    position: "AI Intern",
    duration: "JANUARY 2025 - PRESENT",
    description:["Developed and optimised an AI-based chatbot using FastAPI, handling real-time speech-to-text conversion with just 5-10% latency and text evaluation pipelines.",
"Designed and implemented context-fetching mechanisms by integrating embeddings with the Gemini-1.5-Flash model, delivering accurate and context-aware responses.",
"Built evaluation pipelines using DeepEval to evaluate LLM generated responses and expected response with over 14 different metrics, also implemented this feature for real time for almost 90% accuracy."],
  },
  {
    id: 7,
    title: "Locallie - Startup",
    position: "Founder",
    duration: "MARCH 2025",
    description:["Initiated a hyperlocal marketplace concept to empower local kirana stores by bringing them online."," The platform focused on enabling fast neighborhood deliveries, premium product listings, and credit support to compete with rapid delivery services."],
  }
]



export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const [whichClicked, setWhichClicked] = useState(-1);

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
        className='min-h-screen w-screen fixed top-0 left-0 bg-[position:100%_100%] sm:bg-[position:45%_100%]'
        style={{
          backgroundImage: "url('/bg14.jpg')", 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          opacity: thirdBackgroundOpacity,
          zIndex: 1,
          pointerEvents: thirdBackgroundPointerEvents
        }}
      />

      <div ref={containerRef} className='min-h-[500vh] relative'> 
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
          </motion.div>
        </motion.div>

        <motion.div className="min-h-screen w-screen flex flex-col items-center fixed justify-center px-10 sm:px-28" style={{
          opacity: fourthSectionOpacity,
          y: fourthSectionY,
          zIndex: 1,
          pointerEvents: fourthSectionPointerEvents
        }}>
        <motion.div className='flex flex-col h-screen space-y-12 items-center justify-start w-full py-16 pt-32' style={{
          scale: fourthSectionScale, pointerEvents: fourthSectionPointerEvents
        }}>
          <div className='w-full flex flex-col items-center justify-center -mb-5'>      
            <div className="flex w-full text-white">
                <div className='flex flex-col items-center justify-center mx-[51px]'>
                  <h1 className='text-lg roboto-mono text-center'>DTU Supermileage Team</h1>
                  <p className='text-sm roboto-mono text-center'>MAR 2022 - JAN 2023</p>
                  {/* <FaCaretDown className='text-2xl text-center text-white' /> */}
                </div>
                
                <div className='flex flex-col items-center justify-center ml-[250.5px]'>
                  <h1 className='text-lg roboto-mono text-center'>Placewit</h1>
                  <p className='text-sm roboto-mono text-center'>SEPT 2023 - MAR 2024</p>
                  {/* <FaCaretDown className='text-2xl text-center text-white' /> */}
                </div>
                
                <div className='flex flex-col items-center justify-center ml-[240px]'>
                  <h1 className='text-lg roboto-mono text-center'>Paytm</h1>
                  <p className='text-sm roboto-mono text-center'>JAN 2025 - Present</p>
                  {/* <FaCaretDown className='text-2xl text-center text-white' /> */}
                </div>
                
            </div>
            <div className="flex w-full -mb-[0px] text-white">
                
                <div className='flex flex-col items-center justify-center mx-[288.5px]'>
                  <h1 className='text-lg roboto-mono text-center'>Mathematics Teacher</h1>
                  <p className='text-sm roboto-mono text-center'>OCT 2022 - FEB 2024</p>
                  {/* <FaCaretDown className='text-2xl text-center text-white' /> */}
                </div>
                
                <div className='flex flex-col items-center justify-center ml-[36px]'>
                  <h1 className='text-lg roboto-mono text-center'>Newsviews</h1>
                  <p className='text-sm roboto-mono text-center'>JULY 2024 - AUG 2024</p>
                  {/* <FaCaretDown className='text-2xl text-center text-white' /> */}
                </div>
              
            </div>
            <div className="flex h-[50px] w-full space-x-4">
              <p className='text-sm roboto-mono text-center opacity-0'>DEC 2021</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-[90px] bg-gray-400 self-end'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center  opacity-0'>JULY 2022</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center opacity-0'>JULY 2023</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-[90px] bg-gray-400 self-end'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <div className='relative flex flex-col items-center justify-start'>
                <div className='absolute w-[1px] h-[20px] bg-gray-400'></div>
                <p className='text-sm roboto-mono text-center opacity-0'>JULY 2024</p>
              </div>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-[90px] bg-gray-400 self-end'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center  opacity-0'>JUNE 2025</p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center space-x-4 group z-20'>
            <p className='text-sm roboto-mono text-center'>DEC 2021</p>
            <div className='relative flex w-full group'>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(0)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <p className='text-sm roboto-mono text-center'>JULY 2022</p>
            <div className='relative flex w-full'>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-1/5 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(1)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <p className='text-sm roboto-mono text-center'>JULY 2023</p>
            <div className='relative flex w-full'>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-1/10 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(2)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <div className='relative'>
              <p className='text-sm roboto-mono text-center'>JULY 2024</p>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(3)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
            </div>
            <div className='relative flex w-full'>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(4)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-11/20 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(5)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='opacity-0 group-hover:opacity-100 absolute w-16 h-16 bg-[#fbe1bd]/40 rounded-full top-1/2 -translate-y-1/2 left-78/100 -translate-x-1/2 transition-all duration-100 cursor-pointer' onClick={() => setWhichClicked(6)}>
                <div className='absolute w-11 h-11 bg-[#f9cb8d]/40 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                  <div className='absolute w-6 h-6 bg-[#f6b55d] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'></div>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
              <div className='w-full h-[1px] bg-gray-400'></div>
            </div>
            <p className='text-sm roboto-mono text-center'>JUNE 2025</p>
          </div>
          <div className='w-full flex flex-col items-center justify-center -mt-17'>    
            <div className="flex h-full w-full space-x-4">
              <p className='text-sm roboto-mono text-center opacity-0'>DEC 2021</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center opacity-0'>JULY 2022</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center opacity-0'>JULY 2023</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center opacity-0'>JULY 2024</p>
              <div className='flex h-full w-full justify-between'>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
                <div className='w-[1px] h-full bg-gray-400 opacity-0'></div>
              </div>
              <p className='text-sm roboto-mono text-center opacity-0'>JUNE 2025</p>
            </div>  
            <div className="flex w-full -mb-[40px] text-white justify-end space-x-8">
                
                <div className='flex flex-col items-end justify-center'>
                  <h1 className='text-lg roboto-mono text-center'>SanteSYS</h1>
                  <h2 className='text-sm roboto-mono text-center'>(StartUp Effort 1)</h2>
                  <p className='text-sm roboto-mono text-center'>NOV 2024</p>
                </div>
                
                <div className='flex flex-col items-start justify-center -mr-4'>
                  <h1 className='text-lg roboto-mono text-center'>Locallie</h1>
                  <h2 className='text-sm roboto-mono text-center'>(StartUp Effort 2)</h2>
                  <p className='text-sm roboto-mono text-center'>MAR 2025</p>
                </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
          { whichClicked !== -1 && (
            <motion.div 
              key={whichClicked}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='flex flex-col space-y-4 items-start justify-left mt-8 self-start max-w-3xl'
            >
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className='flex flex-col items-center justify-center text-5xl roboto-mono'
              >
                {experienceData[whichClicked].title}
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className='flex space-x-4 items-center justify-center'
              >
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: "100%" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className='w-[10px] rounded-full bg-gray-400'
                ></motion.div>
                <div className='text-2xl roboto-mono text-center flex-wrap flex items-center justify-between'>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      {experienceData[whichClicked].position}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      className='text-sm text-center'
                    >
                      {experienceData[whichClicked].duration}
                    </motion.span>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                      className='w-full text-sm space-y-2 flex flex-col items-center justify-center mt-4'
                    >
                      {experienceData[whichClicked].description.map((description, index) => (
                        <motion.p 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: 0.5 + (index * 0.1) }}
                          className='text-left'
                        >
                          {description}
                        </motion.p>
                      ))}
                    </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
      </motion.div>

      <Footer />

      </div>
    </>
  );
}
