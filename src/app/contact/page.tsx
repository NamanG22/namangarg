'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoCloudUpload } from "react-icons/io5";
// import { useScroll, useTransform } from "framer-motion";


export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
                    <p className="text-sm sm:text-lg roboto-mono w-full text-start text-white/50">I&apos;m currently working on something new and exciting. Please check back soon!</p>
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
                    {status === 'success' && (
                      <div className="text-green-600 roboto-mono px-8 py-4 w-full self-center bg-black">Message sent successfully!</div>
                    )}
                    {status === 'error' && (
                      <div className="text-red-600 roboto-mono px-8 py-4 w-full self-center bg-black">Failed to send message. <br /> Please try again.</div>
                    )}
                    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full gap-12 px-8 text-black">
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Name" 
                          className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono"  
                        />
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="E-mail" 
                          className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono" 
                        />
                        <input 
                          type="text" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Message" 
                          className="w-full border-b border-black placeholder:text-black focus:outline-none roboto-mono"
                        />
                        <div className="flex items-center justify-between w-full">
                          <button type="button" className="roboto-mono text-md text-black flex items-center justify-start gap-2">
                            <span className="text-4xl"><IoCloudUpload /></span>Upload File
                          </button>
                          <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="roboto-mono text-md py-4 pl-6 rounded-l-lg bg-black text-white -mr-8 self-end flex items-center justify-start gap-2 pr-8 hover:gap-6 hover:pr-4 hover:cursor-pointer transition-all duration-300"
                          >
                            {status === 'sending' ? 'SENDING...' : 'SEND MESSAGE'} <span className="text-lg"><FaArrowRightLong /></span>
                          </button>
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
