"use client"

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Loader from "./Loader"


function page() {

  let [imgData, setimgData] = useState(null);

  const { id } = useParams();

  
const fetchImgData = async () => {
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

        useEffect(() => {fetchImgData()}, [id]);




        



        return (
          <div>
            <h1>hello hope you like what you see..</h1>
            {imgData === null ? <Loader /> :

              <div>

                <h1>content</h1>

<h2 className="text-2xl font-bold mb-4">By: {imgData.photographer}</h2>
          <img 
            src={imgData.src.large2x} 
            alt={imgData.alt} 
            className="rounded-2xl max-w-full h-auto shadow-2xl"
          />
          <button>hello 
          </button>
          <a href={imgData.src.original}> download here</a>
        </div>
              

            }


          </div>
        )
      }

export default page