import React from 'react'
import { useNavigate } from 'react-router-dom';
import developer from '../assets/img/developerImage1.png';
import './Home.css'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='flex'>
        <div className='flex flex-col w-[50vw] '>
          <div >
            <p className='text-transition'>
              <span className='font-bold text-6xl pl-12'>Connecting Minds</span>
              <span className='font-bold text-6xl pl-12'>Building Together</span>
            </p>    
          </div>
          <div className='mt-60 flex text-center justify-center text-purple-600 '>
            <button onClick={()=>{navigate("./home");}} className='border-red-600'>
              Get Started
            </button>
          </div>
        </div>
        <div className='flex items-center'>
            <img src={developer} alt="developer image" srcset="" width={600} height={1000} />
        </div>
    </div>
  )
}

export default Home