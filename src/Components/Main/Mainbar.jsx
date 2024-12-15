import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import {context } from '../../Context/context'

function Mainbar() {

  const {onSent , recentPromp ,showResult , loading, resultData , setInput,input} = useContext(context)

  return (
    <>
    <div className='main flex-1 min-h-screen pb-[15vh] relative'>
      <div className="nav d-flex justify-between align-items-center flex items-center  text-[22px] p-5 text-[#585858]">
        <p className="brand-name">PolarisAi</p>
        <img className=' user-icon w-10 rounded-full"'
        src={assets.user_icon} alt="User Icon" />
      </div>
      
      <div className="main-container max-w-[900px] max-h-[900px] mx-auto my-auto flex items-center ">
        <div className="greet my-8 text-[48px] font-semibold text-[#c4c7c5] p-1">
          <p><span>Hello, Coder.</span></p>
          <p>How can I help you today?</p>
        </div>
      </div>
      
      <div className="main-bottom absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
        <div className="search-box d-flex align-items-center flex items-center justify-between gap-5 bg-[#f0f4f9] p-2.5 px-4 rounded-full ">
          <input onChange={(e)=>setInput(e.target.value)} value={input}  type='text' placeholder='Enter a prompt here' className="search-input flex-1 bg-transparent border-0 outline-none p-2 text-[18px]" />
          <div className="icon-container gap-2 flex-col w-6 cursor-pointer">
            <img  src={assets.gallery_icon} alt="Gallery Icon" className="icon w-6 cursor-pointer" />
            <img src={assets.mic_icon} alt="Mic Icon" className="icon w-6 cursor-pointer" />
            <img onClick={()=>onSent()} src={assets.send_icon} alt="Send Icon" className="icon w-6 cursor-pointer" />
          </div>
        </div>
        
        <p className='bottom-info my-4 text-[13px] text-center font-light'>
          PolarisAi may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
        </p>
      </div>
    </div>
    </>
  );
}

export default Mainbar;
