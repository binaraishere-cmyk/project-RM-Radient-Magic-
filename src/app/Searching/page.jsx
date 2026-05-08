"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation";

export default function HomeWallpaper() {
  const [photos, setPhotos] = useState([]);
  const [keyword, setKeyword] = useState("ice");
  const [imgId, setimgId] = useState(null);

const router = useRouter();


  useEffect(() => {
    if (keyword) {
      fetch(`https://api.pexels.com/v1/search?query=${keyword}`, {
       
        headers: { Authorization: "zbD8A3v97JSn3i19QrKl4qcI1RvlwcHK1VlmS1B1DnIIrowYvaI11zi8" }
      })
        .then(res => res.json())
        .then(data => {
          setPhotos(data.photos || []);
          setimgId(data.id)
        })
    
      }

  }, [keyword]);

  const photoselect = (id) => {
  if (!id) {
    console.error("No ID provided to photoselect!");
    return;
  }
    router.push(`/BigImg/${id}`);
  };


  const inputClassName = "w-full bg-white/5 border border-white/10 pl-14 pr-6 py-4 rounded-full text-sm font-light tracking-wide text-white backdrop-blur-xl outline-none transition-all duration-500 hover:bg-white/10 hover:border-white/20 focus:border-cyan-500/50 focus:bg-black/40 focus:ring-4 focus:ring-cyan-500/10 placeholder:text-white/20";
  const cardClass = index => `relative group overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-700 ease-in-out ${index % 4 === 0 ? 'w-full md:flex-[2] md:min-w-[600px]' : 'flex-1 min-w-[350px]'} h-[450px] bg-white/5 backdrop-blur-sm`;

  return (
    <div className="min-h-screen bg-[#020617] pt-34 pb-8 px-8">
      <div className="flex flex-col gap-10 max-w-[1600px] mx-auto">
      <div className="relative w-full max-w-xl mx-auto group">
 
  <div className="absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-5 w-5 text-white/30 group-focus-within:text-cyan-400" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>

  {/* input eka */}
  <input
    placeholder="Search for high-quality wallpapers..."
    className={inputClassName}
    onChange={(e) => setKeyword(e.target.value)}
    value={keyword}
  />

  
  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
</div>

        <div className="flex flex-wrap gap-6 justify-center">
          {photos.map((p, index) => (
            <div
              key={p.id}
              className={cardClass(index)}
            >
              <img
                src={p.src.large}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-1">Pexels Artist</p>
                <h3 className="text-white text-2xl font-black italic truncate">{p.photographer}</h3>
                <button onClick={() => photoselect(p.id)} className="mt-4 w-fit px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-xs font-bold hover:bg-cyan-500 hover:border-cyan-500 transition-all active:scale-95">
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