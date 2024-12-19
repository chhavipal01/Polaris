import React, { useContext } from 'react';
import './main.css';
import { assets } from '../../assets/assets';
import {context } from '../../Context/context'


function Mainbar() {

  const {onSent , recentPrompt ,showResult , loading, resultData , setInput,input} = useContext(context)

  return (
    <>
    <div className='main flex-1 min-h-screen pb-[15vh] relative'>
      <div className="nav d-flex justify-between align-items-center flex items-center  text-[22px] p-5 text-[#585858]">
        <p className="brand-name">PolarisAi</p>
        <img className=' user-icon  w-10 rounded-full'
        src={assets.user_icon} alt="User Icon" />
      </div>
      
      <div className="main-container max-w-[900px] max-h-[900px] mx-auto my-auto flex items-center ">
         
         { !showResult 
         ?<>
         <div className="greet my-8 text-[48px] font-semibold text-[#c4c7c5] p-1">
          <p><span>Hello, Coder.</span></p>
          <p>How can I help you today?</p>
        </div>
         </>
         :<div className='result w-svw overflow-y-scroll '>
            <div className='result-title flex items-center gap-5 m-10'>
              <img className='w-10 rounded-full' src={assets.user_icon} alt='' />
              <p>{recentPrompt}</p>
            </div>
            <div className='result-data flex items-start gap-5'>
            <img className='w-10 rounded-full' src={assets.gemini_icon} alt='' />
               {loading
               ?<div className='loader w-full flex  flex-col gap-2.5'>
                
                <hr className="h-4 rounded-full border-0 bg-gradient-to-r from-blue-500 via-[#f6f7f8] to-gray-300 bg-[length:1600px_100%]" />
                <hr className="h-4 rounded-full border-0 bg-gradient-to-r from-blue-500 via-[#f6f7f8] to-gray-300 bg-[length:1600px_100%]" />
                <hr className="h-4 rounded-full border-0 bg-gradient-to-r from-blue-500 via-[#f6f7f8] to-gray-300 bg-[length:1600px_100%]w-10  border-t-blue-500 border-transparent " />

                
               </div>
               :<p className='text-[17px] font-light leading-[1.8]' dangerouslySetInnerHTML={{__html:resultData}}></p>

               }
              
            </div>


         </div>
         }


        
      </div>
      
      <div className="main-bottom absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
      <div className="search-box d-flex align-items-center flex items-center justify-between bg-[#f0f4f9] p-2.5 px-4 rounded-full">
      {/* Gallery Icon on the left */}
       <div className="icon-container flex items-center justify-center w-6 h-6 mr-3 cursor-pointer">
       <img src={assets.gallery_icon} alt="Gallery  Icon" className="icon w-6" />
       </div>
    
       {/* Input Field */}
       <input
       onChange={(e) => setInput(e.target.value)}
       value={input}
       type="text"
       placeholder="Ask me anything...."
       className="search-input flex-1 bg-transparent border-0 outline-none p-2 text-[18px] text-center"
      />
    
      {/* Send Icon on the right */}
      <div
      className="icon-container flex items-center justify-center w-6 h-6 ml-3 cursor-pointer"
      onClick={() => onSent()}
       >
      <img src={assets.send_icon} alt="Send Icon"   className="icon w-6" />
      </div>
      </div>

      <p className="bottom-info my-4 text-[13px] text-center font-light">
       PolarisAi may display inaccurate info, including about people, so double-check its responses. Your privacy and Polaris Apps.
  </p>
</div>

    </div>
    </>
  );
}

export default Mainbar;
