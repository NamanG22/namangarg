import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { useState, useRef } from 'react';
import FeedbackPopup from './FeedbackPopup';
import { MdChatBubble } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [likesCount, setLikesCount] = useState(0);
    const thumbsRef = useRef<HTMLDivElement>(null);

    const handleFeedbackSubmit = async (feedback: { isLike: boolean; message: string }) => {
        console.log('Feedback submitted:', feedback);
        if (feedback.isLike) {
            setLikesCount(prev => prev + 1);
        }
    };

    const handleOpenPopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full z-40">
                <div className="relative">
                    {/* <AnimatePresence>
                        {isPopupOpen && (
                            <motion.div 
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.2 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-10 left-1/3 -translate-x-[8%]"
                            >
                                <MdChatBubble className="w-80 h-80 text-gray-500" />
                    
                            </motion.div>
                        )}
                    </AnimatePresence> */}
                    <FeedbackPopup
                        isOpen={isPopupOpen}
                        onClose={() => setIsPopupOpen(false)}
                        likesCount={likesCount}
                        onSubmit={handleFeedbackSubmit}
                        thumbsRef={thumbsRef}
                    />
                </div>

                <div className="text-white overflow-hidden transition-all duration-500 p-4 px-10 sm:px-28 flex items-center justify-between bg-gradient-to-t from-gray-900 to-transparent">
                    <div className="flex items-center justify-center gap-4 w-1/3">
                        <p className="text-white roboto-mono text-sm">NG. Thank you for visiting my website!</p>
                        <motion.div 
                            ref={thumbsRef}
                            className="flex items-center justify-center gap-2 cursor-pointer"
                            onClick={handleOpenPopup}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <IoMdThumbsUp className="text-white w-5 h-5" />
                            <IoMdThumbsDown className="text-white w-5 h-5" />
                        </motion.div>
                    </div>
                    <p className="text-center roboto-mono w-1/3 hidden sm:block">© 2025 NG. All rights reserved.</p>
                    <div className='flex gap-4 w-1/3 justify-end'>
                        <Link href="https://github.com/NamanG22" target="_blank" className="hover:scale-110 transition-transform">
                            <FaGithub className='text-white w-5 h-5' />
                        </Link>
                        <Link href="https://x.com/NamanG2203" target="_blank" className="hover:scale-110 transition-transform">
                            <FaXTwitter className='text-white w-5 h-5' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/namangarg22/" target="_blank" className="hover:scale-110 transition-transform">
                            <FaLinkedin className='text-white w-5 h-5' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}