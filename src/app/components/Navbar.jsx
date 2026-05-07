"use client"
import Link from "next/link"
import GlassBtn from "./GlassBtn"
import Image from "next/image"
import HamBurgerMenu from "./HamBurgerMenu.jsx"

function Navbar() {
  
  return (
    <div className="fixed top-0 left-0 w-full flex justify-center z-50">
      <nav className="w-[95%] max-w-7xl mt-5 p-3 px-8 bg-white/2 backdrop-blur-lg border border-white/10 rounded-full shadow-sm shadow-blue-300">
        <div className="relative flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            <HamBurgerMenu className="md:hidden" />
            
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
              <Image 
                src="/logo.png"
                height={32}
                width={32}
                alt="logo"
                className="object-contain"
              />
              <span className="hidden sm:block text-xl font-extrabold tracking-tight text-white">
                RAYNEX
              </span>
            </Link>
          </div>

          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-full max-w-xs px-4">
            <div className="relative justify-baseline w-full">
              <input 
                placeholder="search..." 
                className="w-full bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-center"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link 
                href="/create" 
                className="text-sm font-semibold transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white"
              >
                placeholder
              </Link>
              
              <Link 
                href="/profile" 
                className="text-sm font-semibold transition-all duration-300 hover:text-blue-400 hover:scale-110 text-white"
              >
                Profile
              </Link>
            </div>

            <GlassBtn>LOGIN</GlassBtn>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar