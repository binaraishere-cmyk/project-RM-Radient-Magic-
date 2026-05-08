"use client"
import { useEffect, useState } from "react"

export default function HomeWallpaper() {
  const [photos, setPhotos] = useState([]);
  let [keyword, setkeyword] = useState("minimalistwallpapers");

  useEffect(() => {
    if (keyword) {
      fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
        headers: { Authorization: "zbD8A3v97JSn3i19QrKl4qcI1RvlwcHK1VlmS1B1DnIIrowYvaI11zi8" }
      })
        .then(res => res.json())
        .then(data => setPhotos(data.photos || []));
    }
  }, [keyword]);

  return (
    <div className="min-h-screen bg-[#020617] p-8">
      <div className="flex flex-col gap-10 max-w-[1600px] mx-auto">
        <div className="relative w-full max-w-xl mx-auto">
          <input
            placeholder="Search wallpapers..."
            className="w-full bg-white/5 border border-white/10 px-6 py-3 rounded-full text-sm focus:outline-none focus:border-cyan-500/50 transition-all text-center text-white backdrop-blur-md"
            onChange={(e) => setkeyword(e.target.value)}
            value={keyword}
          />
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {photos.map((p, index) => (
            <div
              key={p.id}
              className={`relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-700 ease-in-out
                ${index % 4 === 0 ? 'w-full md:flex-[2] md:min-w-[600px]' : 'flex-1 min-w-[350px]'} 
                h-[450px] bg-white/5 backdrop-blur-sm`}
            >
              <img
                src={p.src.large}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Pexels Artist</p>
                <h3 className="text-white text-2xl font-black italic truncate">{p.photographer}</h3>
                <button className="mt-4 w-fit px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold hover:bg-cyan-500 hover:border-cyan-500 transition-all active:scale-95">
                  VIEW FULL
                </button>
              </div>

              <div className="absolute inset-0 border-2 border-cyan-500/0 group-hover:border-cyan-500/40 rounded-3xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}