import { useState, useEffect, RefObject } from 'react';
import { IoMdThumbsDown, IoMdThumbsUp } from "react-icons/io";
import { motion, AnimatePresence } from 'framer-motion';

interface FeedbackPopupProps {
    isOpen: boolean;
    onClose: () => void;
    likesCount: number;
    onSubmit: (feedback: { isLike: boolean; message: string }) => void;
    thumbsRef: RefObject<HTMLDivElement>;
}

export default function FeedbackPopup({ isOpen, onClose, likesCount, onSubmit, thumbsRef }: FeedbackPopupProps) {
    const [feedback, setFeedback] = useState('');
    const [isLike, setIsLike] = useState<boolean | null>(null);
    const [position, setPosition] = useState({ left: 0, bottom: 0 });

    useEffect(() => {
        if (isOpen && thumbsRef.current) {
            const rect = thumbsRef.current.getBoundingClientRect();
            const left = rect.left;
            setPosition({
                left: left - 136, // Center the popup above the thumbs
                bottom: window.innerHeight - rect.top + 20 // Position above the thumbs with some spacing
            });
        }
    }, [isOpen, thumbsRef]);

    const handleSubmit = () => {
        if (isLike === null) return;
        onSubmit({ isLike, message: feedback });
        setFeedback('');
        setIsLike(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div 
                    className="fixed w-80 bg-gray-500 rounded-lg p-4 shadow-xl"
                    style={{
                        left: position.left,
                        bottom: position.bottom
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{
                        type: "spring",
                        damping: 20,
                        stiffness: 300
                    }}
                >
                    <div className="flex justify-between items-center mb-3">
                        <motion.h3 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-lg font-semibold text-white"
                        >
                            Share Your Feedback
                        </motion.h3>
                        <button
                            onClick={onClose}
                            className="text-white hover:cursor-pointer hover:text-gray-700"
                        >
                            ×
                        </button>
                    </div>
                    
                    <motion.div 
                        className="flex gap-2 justify-center mb-3 rounded-full mx-auto"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className='w-1/2 flex items-center justify-end'>

                            <button
                                onClick={() => setIsLike(true)}
                                className={`p-2 flex items-end group justify-end gap-1 rounded-full transition-all ${
                                    isLike === true ? 'bg-green-100' : ''
                                }`}
                                >
                                <IoMdThumbsUp className={`w-5 h-5 ${
                                    isLike === true ? 'text-green-600' : 'text-gray-600 group-hover:text-white group-hover:cursor-pointer'
                                }`} />
                                <span className="ml-1 text-xs text-gray-600">{likesCount}</span>
                            </button>
                        </div>
                        <div className='w-[1px] bg-gray-600 opacity-50'></div>
                        <div className='w-1/2 flex items-center justify-start'>
                            <button
                                onClick={() => setIsLike(false)}
                                className={`p-2 flex items-center gap-1 rounded-full transition-all group ${
                                    isLike === false ? 'bg-red-100' : ''
                                }`}
                            >
                                <IoMdThumbsDown className={`w-5 h-5 ${
                                    isLike === false ? 'text-red-600' : 'text-gray-600 group-hover:text-white group-hover:cursor-pointer'
                                }`} />
                            </button>
                        </div>
                    </motion.div>

                    <motion.textarea
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Write your feedback here..."
                        className="w-full p-2 border border-gray-300 rounded-lg mb-3 h-20 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <motion.button
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={handleSubmit}
                        disabled={isLike === null}
                        className="w-full bg-white text-gray-900 py-1.5 px-3 rounded-lg text-sm hover:bg-black hover:text-white hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Send Feedback
                    </motion.button>

                    {/* Chat bubble triangle */}
                    <div className="absolute bottom-[-8px] left-[50%] translate-x-[-50%] w-4 h-4 bg-gray-500 transform rotate-45"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
} 