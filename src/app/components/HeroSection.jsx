import GlassBtn from "./GlassBtn";
import HamBurgerMenu from "./HamBurgerMenu.jsx";


const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
            {/* Frozen Atmosphere - Radial Glows */}
            <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px]" />




            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">




                 <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 cursor-default">
 
  <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white via-cyan-100 to-blue-400 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] transition-all duration-300 ease-out hover:scale-110 origin-left">
      RAYNEX
  </span>
</h1>

                    <p className="text-lg md:text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto font-light tracking-wide">
                        Transform your screen into a premium sanctuary.
                    </p>

                    {/* Chilled Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

                        <GlassBtn>Explore</GlassBtn>


                    </div>
                </div>
            </div>

            {/* Frosted Glass Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-32  from-[#020617] to-transparent z-20" />

            {/* Decorative Ice Shards */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-400/10 rotate-45 border border-white/5 backdrop-blur-2xl rounded-3xl" />
            <div className="absolute top-10 -left-10 w-40 h-40 bg-blue-500/5 -rotate-12 border border-white/5 backdrop-blur-xl rounded-full" />
        </section>
    );
};

export default HeroSection;