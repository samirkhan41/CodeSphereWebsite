import bg1 from '../assets/Bg1.jpg'
import bg2 from '../assets/Bg2.jpg'
import bg3 from '../assets/Bg3.jpg'
import bg4 from "../assets/Bg4.jpg"

const Background = ({ heroCount }) => {

  if (heroCount == 0) {
    return (
      <img 
        src={bg1} 
        alt="" 
        className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-75 transition-all duration-700'
      />
    )
  }
  else if (heroCount == 1) {
    return (
      <img 
        src={bg2} 
        alt="" 
        className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-75 transition-all duration-700'
      />
    )
  }
  else if (heroCount == 2) {
    return (
      <img 
        src={bg3} 
        alt="" 
        className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-75 transition-all duration-700'
      />
    )
  }
  else if (heroCount == 3) {
    return (
      <img 
        src={bg4} 
        alt="" 
        className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-75 transition-all duration-700'
      />
    )
  }

  return (
    <img 
      src={bg1} 
      alt="" 
      className='w-full h-screen object-cover absolute top-0 left-0 -z-10 brightness-75'
    />
  )
}

export default Background