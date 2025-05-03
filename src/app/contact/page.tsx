'use client'

import Header from "../components/Header";

import Footer from "../components/Footer";
import { useRef } from "react";
import { motion} from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
// import { useScroll, useTransform } from "framer-motion";


export default function Contact() {
  const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end start"]
//   });

//   const sectionGap = 0.078;
//   const sectionLength = 0.128;

//   // First section animations - slower fade out
//   const firstSectionOpacity = useTransform(scrollYProgress, [0, sectionLength], [1, 0]);
//   const firstSectionY = useTransform(scrollYProgress, [0, sectionLength], [0, -50]);
//   const firstSectionScale = useTransform(scrollYProgress, [0, sectionLength], [1, 0.8]);
//   const firstSectionPointerEvents = useTransform(scrollYProgress, [0, sectionLength], ["auto", "none"]);

//   // Second section animations - more gradual fade in
//   const secondSectionOpacity = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [0, 1, 0]);
//   const secondSectionY = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [50, 0, -50]);
//   const secondSectionScale = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], [0.8, 1, 0.8]);
//   const secondSectionPointerEvents = useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap , (3*sectionLength)-sectionGap], ["none", "auto", "none"]);

//   // Third section animations
//   const thirdSectionOpacity = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0, 1, 0]);
//   const thirdSectionY = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [50, 0, -50]);
//   const thirdSectionScale = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], [0.8, 1, 0.8]);
//   const thirdSectionPointerEvents = useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap), (4*sectionLength)-(2*sectionGap), (5*sectionLength)-(2*sectionGap)], ["none", "auto", "none"]);

//   const fourthSectionOpacity = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [0, 1, 0]);
//   const fourthSectionY = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [50, 0, -50]);
//   const fourthSectionScale = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], [0.8, 1, 0.8]);
//   const fourthSectionPointerEvents = useTransform(scrollYProgress, [(5*sectionLength)-(3*sectionGap), (6*sectionLength)-(3*sectionGap), (7*sectionLength)-(3*sectionGap)], ["none", "auto", "none"]);

//   const fifthSectionOpacity = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0, 1, 0]);
//   const fifthSectionY = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [50, 0, -50]);
//   const fifthSectionScale = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], [0.8, 1, 0.8]);
//   const fifthSectionPointerEvents = useTransform(scrollYProgress, [(7*sectionLength)-(4*sectionGap), (8*sectionLength)-(4*sectionGap), (9*sectionLength)-(4*sectionGap)], ["none", "auto", "none"]);  

//   const sixthSectionOpacity = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [0, 1]);
//   const sixthSectionY = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [50, 0]);
//   const sixthSectionScale = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], [0.8, 1]);
//   const sixthSectionPointerEvents = useTransform(scrollYProgress, [(9*sectionLength)-(5*sectionGap), (10*sectionLength)-(5*sectionGap)], ["none", "auto"]);

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
          backgroundImage: "url('/bg12.jpg')", 
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
          backgroundPositionX:"45%",
          backgroundPositionY:"100%",
        //   opacity: firstBackgroundOpacity,
          zIndex: 1,
        //   pointerEvents: firstBackgroundPointerEvents
        }}
      />

      <div ref={containerRef} className='min-h-[100vh] relative'> 
        <Header />
        <motion.div 
            className='h-screen w-screen fixed top-0 flex items-center justify-center px-10 sm:px-28 py-48 sm:py-28'
            style={{
                opacity: 1,
                zIndex: 20,
                pointerEvents: "auto"
            }}
        >
            <motion.div className='w-full min-h-screen flex relative z-30 items-center justify-center'>
                <div className="flex flex-col min-h-screen w-3/5 items-start justify-center space-y-4 pr-40">
                    <h1 className={`text-4xl sm:text-5xl roboto-mono w-full text-start`}>Contact Me</h1>
                    <p className="text-sm sm:text-lg roboto-mono w-full text-start text-white/50">I'm currently working on something new and exciting. Please check back soon!</p>
                    <div className="flex flex-col items-start justify-start gap-4 mt-8">
                        <p className="text-sm sm:text-lg roboto-mono w-full text-start flex items-center justify-start gap-4  "><span className="text-white"><FaGithub className='text-white w-5 h-5' /></span> NamanG22</p>
                        <p className="text-sm sm:text-lg roboto-mono w-full text-start flex items-center justify-start gap-4  "><span className="text-white"><FaTwitter className='text-white w-5 h-5' /></span> NamanG2203</p>
                    </div>
                    <h2 className={`text-xl sm:text-2xl roboto-mono w-full text-start mt-10 mb-8`}>Follow Me</h2>
                    <div className="flex items-start justify-start gap-8">
                      <span className="hover:scale-120 transition-all duration-300 bg-white rounded-full p-2"><FaLinkedin className='text-black w-7 h-7' /></span> 
                      <span className="hover:scale-120 transition-all duration-300 bg-white rounded-full p-2"><FaGithub className='text-black w-7 h-7' /></span>
                      <span className="hover:scale-120 transition-all duration-300 bg-white rounded-full p-2"><FaTwitter className='text-black w-7 h-7' /></span>
                      <span className="hover:scale-120 transition-all duration-300 bg-white rounded-full p-2"><FaInstagram className='text-black w-7 h-7' /></span>
                      <span className="hover:scale-120 transition-all duration-300 bg-white rounded-full p-2"><FaYoutube className='text-black w-7 h-7' /></span>
                    </div>
                </div>
                <div className="flex flex-col min-h-screen w-2/5 pb-40 items-center justify-center px-10">
                  <div className="bg-white flex-1 flex flex-col space-y-8 items-center justify-center w-full text-black rounded-b-lg">
                    <h1 className={`text-2xl sm:text-2xl roboto-mono w-full text-start px-8`}>Contact Me</h1>
                    <form action="" className="flex flex-col items-center justify-center w-full gap-12 px-8 text-black">
                        <input type="text" placeholder="Name" className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono"  />
                        <input type="email" placeholder="E-mail" className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono" />
                        <input type="phone" placeholder="Phone" className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono" />
                        <input type="text" name="message" id="message" placeholder="Message" className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono"></input>
                        <div className="flex items-center justify-between w-full">
                          <button type="submit" className="roboto-mono text-md text-black flex items-center justify-start gap-2"><span className="text-4xl"><IoCloudUpload /></span>Upload File</button>
                          <button type="submit" className="roboto-mono text-md py-4 pl-6 rounded-l-lg bg-black text-white -mr-8 self-end flex items-center justify-start gap-2 pr-8 hover:gap-6 hover:pr-4 hover:cursor-pointer transition-all duration-300">SEND MESSAGE <span className="text-lg"><FaArrowRightLong /></span></button>
                        </div>
                    </form>
                  </div>
                </div>
            </motion.div>
        </motion.div>
      <Footer />

      </div>
    </>
  );
}
