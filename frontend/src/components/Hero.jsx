
import { FaCircle } from "react-icons/fa";
const Hero = ({heroData,heroCount,setHeroCount}) => {
  return (
    <div className='w-[40%] h-screen relative flex items-center px-10'>
  
  {/* TEXT */}
  <div className='absolute space-y-4 text-white'>
    <p className='text-4xl md:text-5xl font-bold leading-tight tracking-wide'>
      {heroData.text1}
    </p>

    <p className='text-lg md:text-xl text-gray-300'>
      {heroData.text2}
    </p>
  </div>

  {/* DOTS */}
  <div className='absolute bottom-10 flex gap-4 items-center'>
    
    <FaCircle 
      className={`cursor-pointer transition-all duration-300 ${heroCount===0 ? "text-orange-400 scale-125" : "text-white/50"}`} 
      onClick={() => setHeroCount(0)}
    />

    <FaCircle 
      className={`cursor-pointer transition-all duration-300 ${heroCount===1 ? "text-orange-400 scale-125" : "text-white/50"}`} 
      onClick={() => setHeroCount(1)}
    />

    <FaCircle 
      className={`cursor-pointer transition-all duration-300 ${heroCount===2 ? "text-orange-400 scale-125" : "text-white/50"}`} 
      onClick={() => setHeroCount(2)}
    />

    <FaCircle 
      className={`cursor-pointer transition-all duration-300 ${heroCount===3 ? "text-orange-400 scale-125" : "text-white/50"}`} 
      onClick={() => setHeroCount(3)}
    />

  </div>

</div>
  )
}

export default Hero