import Image from "next/image"

function Loader() {
  return (
    <div 
 className="w-full h-screen  flex justify-center items-center"
    >
<Image 
src="/images/loading.gif"
height={100}
width={100}
alt="loading"
/>

    </div>
  )
}

export default Loader