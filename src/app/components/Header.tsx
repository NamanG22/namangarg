import Link from "next/link";

export default function Header() {
  return (
    <div className='fixed top-0 left-0 w-full flex justify-center items-center z-50'>
      <div className='flex justify-between items-center p-4 space-x-8'>
          <Link href="/">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Home</p>
          </Link>
          <Link href="/about">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>About</p>
          </Link>
          <Link href="/projects">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Projects</p>
          </Link>
          <Link href="/contact">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Contact</p>
          </Link>
          <Link href="/blog">
            <p className='text-white roboto-mono py-2 px-4 rounded-lg border border-white/0 hover:border-white/100 transition-all duration-300'>Blog</p>
          </Link>
      </div>
    </div>
  );
}