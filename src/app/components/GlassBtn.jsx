"use client"

function GlassBtn({ children, onclick }) {
  return (
    <div>
        <button onClick={onclick} className="bg-white/6 hover:shadow-white/10 hover:shadow p-3 font-bold rounded-full shadow-sm shadow-gray-500 transition-all duration-300 hover:text-blue-400 hover:scale-125 cursor-pointer">{children}</button>
    </div>
  )
}

export default GlassBtn