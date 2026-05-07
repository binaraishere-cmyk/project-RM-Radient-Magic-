"use client"

import HeroSection from "./components/HeroSection";


function Page() {


  return (
    <div className="relative  mt-0 flex flex-col overflow-hidden"> 
     
{/* hero section is this */}
<div className="w-[100%] ml-0" >
<HeroSection/>
</div>
<div>
<div className="bg-gradient-to-b from-[#020617] via-[#051125] to-[#0a192f]">
<div className="w-full h-1 animate-pulse  inset-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>

<div>
  


</div>

</div></div>

    </div>
  )
}

export default Page;