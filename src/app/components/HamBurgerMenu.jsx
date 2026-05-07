"use client"
import { useState, useEffect } from "react"
import Hamburger from "hamburger-react";
import Link from "next/link";

function HamBurgerMenu({ className }) {
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <div className={className}>
      <div className="relative z-[110] flex items-center justify-center">
        <Hamburger
          toggled={isOpen}
          toggle={setisOpen}
          color={isOpen ? "#ffffff" : "#22d3ee"}
          size={32}
        />
      </div>

      {isOpen && (
        <div className="fixed inset-0 w-screen h-screen bg-[#020617] z-[100] flex justify-center items-center overflow-hidden">
          <div className="flex flex-col items-center justify-center w-full gap-6 text-center px-6">
            
            <h2 className="text-xl font-bold tracking-[0.3em] text-cyan-400 opacity-90 uppercase">MENU</h2>

            <div className="relative w-full max-w-xs mb-4 group">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white/5 border border-white/10 pl-6 pr-14 py-3 rounded-full text-white text-sm focus:outline-none focus:border-cyan-500/50 transition-all backdrop-blur-md"
              />
              <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
               
               
               {/* button eka search box eke */}
               
               
               
                <button className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[10px] font-bold text-cyan-400 uppercase tracking-widest hover:bg-white/20 hover:border-cyan-400/50 transition-all active:scale-95 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  Go
                </button>




              </div>
            </div>

            <Link
              href="/create"
              onClick={() => setisOpen(false)}
              className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transition-all duration-300 hover:text-cyan-400 hover:scale-105"
            >
              placeholder
            </Link>

            <Link
              href="/profile"
              onClick={() => setisOpen(false)}
              className="text-4xl md:text-5xl font-black italic tracking-tighter text-white uppercase transition-all duration-300 hover:text-cyan-400 hover:scale-105"
            >
              profile
            </Link>

          </div>
        </div>
      )}
    </div>
  )
}

export default HamBurgerMenu;