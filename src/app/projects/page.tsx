'use client'
// import { Roboto_Mono } from "next/font/google";
import Header from "../components/Header";
import Link from "next/link";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Footer from "../components/Footer";

// const robotoMono = Roboto_Mono({
//   variable: "--font-roboto-mono",
//   subsets: ["latin"],
// });

const projects = [
  {
    title: "Speech-to-Text",
    description: "Developed a custom speech-to-text converter leveraging Google Generative Model Gemini-1.5-flash to accurately transcribe spoken language into text.",
    points: [
      "Utilized Google Generative Model Gemini-1.5-flash for accurate transcription.",
      "Optimized the model for real-time transcription with low latency.",
      "Converts the AI's text responses back into speech, simulating a natural conversation with 75% satisfaction.",
    ],
    technologies: ["Python", "PyAudio", "Gemini-1.5-flash"],
    link: "https://github.com/NamanG22/Speech-to-Text-Converter",
    image: "/bg.jpg"
  },
  {
    title: "Nova Booking",
    description: "Enterprise-level Hotel Booking Application",
    points: [
      "Developed using the MERN stack and Tailwind CSS, serving over 1,000 users with seamless experiences.",
      "Integrated Stripe for secure and efficient payment processing, achieving a 99% transaction success rate.",
      "Implemented user authentication with JSON Web Tokens (JWT) and HTTP cookies, reducing unauthorized access by 90%.",
      "Built advanced forms and image uploading using Cloudinary, handling over 1,000 images with 99% upload success rate.",
      "Ensured code quality by implementing robust automated testing, test coverage by 40% and reducing bugs by 50%.",
      "Deployed the application to the cloud, achieving 99.9% uptime, reliable access for over 5,000 users.",
    ],
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "JWT", "HTTP Cookies"],
    link: "https://github.com/NamanG22/Nova-Booking",
    image: "/bg.jpg"
  },
  {
    title: "NewsViews",
    description: "News Scrolling Application",
    points: [
      "Developed the backend for a news video platform with 10,000+ users, with content tailored to individual preferences.", 
      "Automated video management, removing outdated content to reduce database load by 20%.",
      "Deployed and hosted the platform, achieving 99.9% uptime and ensuring smooth performance across multiple devices.",
    ],
    technologies: ["Java", "Spring Boot", "APIs", "Postman", "Git", "Docker", "Render"],
    link: "https://github.com/NamanG22/NewsViews",
    image: "/bg.jpg"
  }
]

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const sectionGap = 0.18;
  const sectionLength = 0.25;

  // First section animations - slower fade out
  const transitions = [
    [
      useTransform(scrollYProgress, [0, sectionLength], [1, 0]),
      useTransform(scrollYProgress, [0, sectionLength], [0, -50]),
      useTransform(scrollYProgress, [0, sectionLength], [0, -50]),
      useTransform(scrollYProgress, [0, sectionLength], [1, 0.8]),
      useTransform(scrollYProgress, [0, sectionLength], ["auto", "none"])
    ],
    [
      useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap, (3*sectionLength)-sectionGap], [0, 1, 0]),
      useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap, (3*sectionLength)-sectionGap], [50, 0, -50]),
      useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap, (3*sectionLength)-sectionGap], [50, 0, -50]),
      useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap, (3*sectionLength)-sectionGap], [0.8, 1, 0.8]),
      useTransform(scrollYProgress, [sectionLength-sectionGap,(2*sectionLength)-sectionGap, (3*sectionLength)-sectionGap], ["none", "auto", "none"])
    ],
    [
      useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap),(4*sectionLength)-(2*sectionGap)], [0, 1]),
      useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap),(4*sectionLength)-(2*sectionGap)], [50, 0]),
      useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap),(4*sectionLength)-(2*sectionGap)], [50, 0]),
      useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap),(4*sectionLength)-(2*sectionGap)], [0.8, 1]),
      useTransform(scrollYProgress, [(3*sectionLength)-(2*sectionGap),(4*sectionLength)-(2*sectionGap)], ["none", "auto"])
    ]
  ];

  return (
    <>
      {/* Fixed Background */}
      <motion.div 
        className='min-h-screen w-screen fixed top-0 left-0 bg-[position:75%_0%] sm:bg-[position:100%_100%]'
        style={{
          backgroundImage: "url('/bg9.jpg')", 
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          opacity: 1,
          zIndex: 1,
          pointerEvents: "none"
        }}
      />

      <div ref={containerRef} className='min-h-[300vh] relative'> 
        <Header />
        {/* First Section */}

        {transitions.map((transition, index) => (
          <motion.div 
            key={index}
            className='h-screen w-screen fixed top-0 flex items-center justify-left'
          style={{
            opacity: transition[0],
            zIndex: 20,
            pointerEvents: transition[4]
          }}
        >
          <motion.div 
            style={{ y: transition[1], scale: transition[3], pointerEvents: transition[4] }}
            className='h-full flex relative z-30 w-[42%]'
          >
          
            <div className="h-full flex flex-col items-center justify-center p-8">
              <img src={projects[0].image} alt={projects[0].title} className="w-[80%] object-cover" />
              <img src={projects[0].image} alt={projects[0].title} className="w-[30%] object-cover -mt-20 self-start ml-5" />
              <img src={projects[0].image} alt={projects[0].title} className="w-[50%] object-cover -mt-40 self-end" />
            </div>
          </motion.div>
          <motion.div 
            style={{ y: transition[2], scale: transition[3], pointerEvents: transition[4] }}
            className='h-full flex relative z-30 w-[58%]'
          >
            <div className="h-full flex flex-row gap-4 items-center justify-center pr-8">
              <div className="w-full flex flex-col gap-4 border-black rounded-lg p-8 text-white">
                <h1 className="text-2xl sm:text-5xl roboto-mono">{projects[index].title}</h1>
                <h2 className="text-md sm:text-xl text-gray-400 roboto-mono">{projects[index].description}</h2>
                <ul className="list-disc ml-4">
                  {projects[index].points.map((point, index2) => (
                    <li key={index2} className="text-sm sm:text-[1rem] text-white/70 roboto-mono">{point}</li>
                  ))}
                </ul>
                <div className="flex flex-row gap-4">
                  {projects[index].technologies.map((technology, index2) => (
                    <h3 key={index2} className="text-sm sm:text-md roboto-mono bg-white/20 px-3 py-1 rounded-full text-white">{technology}</h3>
                  ))}
                </div>
                <div className="flex flex-row gap-4 w-full">
                  <Link href={projects[index].link} className="w-full text-center text-white text-sm sm:text-lg roboto-mono bg-white/20 py-3 rounded-md">View Project</Link>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
        ))}
      <Footer />

      </div>
    </>
  );
}
