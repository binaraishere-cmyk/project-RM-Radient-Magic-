"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from "./Loader" 
import Link from 'next/link'

function Page() { 
  const [imgData, setImgData] = useState(null);
  const [error, setError] = useState(false); 

  const params = useParams();
  const id = params?.id;

  const fetchImgData = async () => {
    if (!id) return;
    try {
      const res = await fetch(`https://api.pexels.com/v1/photos/${id}`, {
        headers: { 
          Authorization: "zbD8A3v97JSn3i19QrKl4qcI1RvlwcHK1VlmS1B1DnIIrowYvaI11zi8" 
        },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setImgData(data); 
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };

  useEffect(() => {
    fetchImgData();
  }, [id]);

  if (error) return <div className="text-white p-10 text-center">Image not found or API error.</div>;

  return (
   
    <div className="min-h-screen bg-[#020617] py-20 px-4 text-white flex flex-col items-center">
      
      {imgData === null ? (
        <Loader />
      ) : (
        <div className="max-w-4xl pt-24 w-full flex flex-col items-center">
    
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center italic text-cyan-400">
            By: {imgData.photographer}
          </h2>

          <div className="relative group">
            <img 
              src={imgData.src.large2x} 
              alt={imgData.alt} 
              className="rounded-3xl w-full h-auto shadow-2xl border border-white/10 transition-transform duration-500"
            />
          </div>

          <div className="mt-10 flex flex-wrap gap-6 justify-center items-center">
          
            <a 
              href={imgData.src.original} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-cyan-500 border border-white/20 hover:border-cyan-500 px-8 py-3 font-bold rounded-full shadow-lg transition-all duration-300 hover:text-white hover:scale-110 active:scale-95"
            >
              Download Original
            </a>

         
            <Link 
              href="/" 
              className="inline-block bg-white/5 border border-white/10 px-8 py-3 font-bold rounded-full shadow-lg transition-all duration-300 hover:text-blue-400 hover:bg-white/10 hover:scale-110 active:scale-95"
            >
              Go Back
            </Link>
          </div>
          
        </div>
      )}
    </div>
  );
}

export default Page;