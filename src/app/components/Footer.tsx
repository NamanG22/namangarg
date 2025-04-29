import { FaGithub } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";


import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 group">
          <div className="text-white overflow-hidden transition-all duration-500 p-4 px-28 flex items-center justify-between">
            
            <p className="text-left roboto-mono w-1/3">NG.</p>
            <p className="text-center roboto-mono w-1/3">© 2025 NG. All rights reserved.</p>
            <div className='flex gap-4 w-1/3 justify-end'>
                <Link href="https://github.com/NamanG22" target="_blank" className="hover:scale-110 transition-transform">
                    <FaGithub className='text-white w-5 h-5' />
                </Link>
                <Link href="https://twitter.com/naman_kumar_s" target="_blank" className="hover:scale-110 transition-transform">
                    <FaTwitter className='text-white w-5 h-5' />
                </Link>
                <Link href="https://www.linkedin.com/in/namangarg22/" target="_blank" className="hover:scale-110 transition-transform">
                    <FaLinkedin className='text-white w-5 h-5' />
                </Link>
            </div>
          </div>
        </div>
  );
}
    // <div className='fixed bottom-0 left-0 w-full px-28 flex justify-center items-center z-50 hover:bg-red-900 hover:h-100 transition-all duration-3000'>
    //   <div className='flex justify-between items-center p-4 px-28 space-x-8 w-full'>
    //     <div className='text-white roboto-mono border-b border-white/50'>Navigation</div>
    //     <div className='text-center roboto-mono'>NG.</div>
    //     <div className='text-white roboto-mono border-b border-white/50'>Contact</div>
    //   </div>
    //   <div className='absolute bottom-4 right-4 flex gap-4 z-30'>
    //     <Link href="https://github.com/NamanG22" target="_blank" className="hover:scale-110 transition-transform">
    //         <FaGithub className='text-white w-5 h-5' />
    //     </Link>
    //     <Link href="https://twitter.com/naman_kumar_s" target="_blank" className="hover:scale-110 transition-transform">
    //         <FaTwitter className='text-white w-5 h-5' />
    //     </Link>
    //     <Link href="https://www.linkedin.com/in/namangarg22/" target="_blank" className="hover:scale-110 transition-transform">
    //         <FaLinkedin className='text-white w-5 h-5' />
    //     </Link>
    //   </div>

    // </div>