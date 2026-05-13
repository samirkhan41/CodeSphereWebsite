import logo from '../assets/logo.jpg'
import { FaHome } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { MdContacts } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from 'react-router-dom';

const Nav = () => {
const navigate =useNavigate()
  return (
    <>
      {/* NAVBAR */}
      <div
        className='h-[70px] w-full fixed top-0 z-50
        flex items-center
        px-5 md:px-8
        bg-gradient-to-r from-black via-gray-950 to-black
        backdrop-blur-xl border-b border-white/5
        shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
      >

        {/* Logo */}
        <div className='flex items-center cursor-pointer group z-10'>

          <img
            src={logo}
            alt="logo"
            className='w-28 sm:w-32 md:w-36
            transition-all duration-500
            group-hover:scale-110'
          />

        </div>

        {/* Desktop Menu Center */}

        <div
          className='absolute left-1/2 -translate-x-1/2
          hidden md:flex items-center
          gap-8 lg:gap-12
          text-sm tracking-wide font-medium'
        >

          <p
          onClick={()=>
          {
            navigate("/")
          }
          }
            className='text-gray-400 hover:text-white
            transition-all duration-300
            hover:-translate-y-1
            cursor-pointer'
          >
            HOME
          </p>

          <p
          onClick={()=>
          {
            navigate("/projects")
          }
          }
            className='text-gray-400 hover:text-white
            transition-all duration-300
            hover:-translate-y-1
            cursor-pointer'
          >
            PROJECTS
          </p>

          <p
          onClick={()=>
          {
            navigate("/about")
          }
          }
            className='text-gray-400 hover:text-white
            transition-all duration-300
            hover:-translate-y-1
            cursor-pointer'
          >
            ABOUT
          </p>

          <p
          onClick={()=>
          {
            navigate("/events")
          }
          }
            className='text-gray-400 hover:text-white
            transition-all duration-300
            hover:-translate-y-1
            cursor-pointer'
          >
            EVENTS
          </p>

        </div>

      </div>

      {/* MOBILE BOTTOM NAV */}

      <div
        className='fixed bottom-0 left-0 w-full h-[70px]
        flex items-center justify-around
        px-3 sm:px-6 pb-2 pt-2
        bg-black/90 backdrop-blur-xl
        border-t border-white/10
        shadow-[0_-5px_25px_rgba(0,0,0,0.8)]
        md:hidden z-[9999]'
      >

        <button
        onClick={()=>
        {
          navigate("/")
        }
        }
          className='flex flex-col items-center
          text-gray-400 hover:text-white
          text-[11px] sm:text-xs
          transition-all duration-300
          hover:-translate-y-1'
        >

          <FaHome className='text-lg mb-1' />
          Home

        </button>

        <button
        onClick={()=>
        {
          navigate("/projects")
        }
        }
          className='flex flex-col items-center
          text-gray-400 hover:text-white
          text-[11px] sm:text-xs
          transition-all duration-300
          hover:-translate-y-1'
        >

          <BsFillCollectionFill className='text-lg mb-1' />
          Projects

        </button>

        <button
        onClick={()=>
        {
          navigate("/about")
        }
        }
          className='flex flex-col items-center
          text-gray-400 hover:text-white
          text-[11px] sm:text-xs
          transition-all duration-300
          hover:-translate-y-1'
        >

          <MdContacts className='text-lg mb-1' />
          About

        </button>

        <button
        onClick={()=>
        {
          navigate("/events")
        }
        }
          className='flex flex-col items-center
          text-gray-400 hover:text-white
          text-[11px] sm:text-xs
          transition-all duration-300
          hover:-translate-y-1'
        >

          <SlCalender  className='text-lg mb-1' />
          Events

        </button>

      </div>
    </>
  )
}

export default Nav