import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { WindSong } from "next/font/google";

const windSong = WindSong({
  variable: "--font-windsong",
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='fixed top-0 left-0 w-full flex flex-col z-50'>
      <div className='flex justify-between items-center px-10 sm:px-28'>
        <Link href="/" className='flex p-4 items-center justify-center sm:flex-1'>
          <p className={`text-4xl ${windSong.className} py-2`}>Naman Garg</p>
        </Link>
        <div className='justify-center items-center p-4 space-x-8 flex-2 hidden sm:flex'>
          <Link href="/">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300 hover:bg-black/20'>Home</p>
          </Link>
          <Link href="/about">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300 hover:bg-black/20'>About</p>
          </Link>
          <Link href="/projects">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300 hover:bg-black/20'>Projects</p>
          </Link>
          <Link href="/contact">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300 hover:bg-black/10'>Contact</p>
          </Link>
          <Link href="/blog">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300 hover:bg-black/20'>Blog</p>
          </Link>
        </div>
        <div className='sm:flex-1 -mr-4 sm:mr-0'>
          <div className='w-full flex justify-end block sm:hidden'>
            <button onClick={toggleMenu} className="p-1">
              {isMenuOpen ? (
                <RxCross2 className='text-white text-2xl' />
              ) : (
                <GiHamburgerMenu className='text-white text-2xl' />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`sm:hidden bg-black/50 backdrop-blur-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Home</p>
          </Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)}>
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>About</p>
          </Link>
          <Link href="/projects" onClick={() => setIsMenuOpen(false)}>
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Projects</p>
          </Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Contact</p>
          </Link>
          <Link href="/blog" onClick={() => setIsMenuOpen(false)}>
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Blog</p>
          </Link>
        </div>
      </div>
    </div>
  );
}