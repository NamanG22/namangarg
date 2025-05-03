'use client'

import Header from "../components/Header";

import Footer from "../components/Footer";
import { useRef } from "react";
import { motion} from "framer-motion";
// import { useScroll, useTransform } from "framer-motion";


export default function Blog() {
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
          backgroundImage: "url('/bg11.jpg')", 
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
            className='h-screen w-screen fixed top-0 flex items-end justify-center px-10 sm:px-28 py-48 sm:py-28'
            style={{
                opacity: 1,
                zIndex: 20,
                pointerEvents: "auto"
            }}
        >
            <motion.div className='w-full flex flex-col relative z-30 items-center justify-center'>
                <h1 className={`text-4xl sm:text-6xl roboto-mono w-full text-center`}>Coming Soon...</h1>
            </motion.div>
        </motion.div>
      <Footer />

      </div>
    </>
  );
}
