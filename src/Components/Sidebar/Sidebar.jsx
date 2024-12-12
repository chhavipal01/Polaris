import React from 'react'
import "./Sidebar.css"
import {assets} from '../../assets/assets'
import { useState } from "react"


const Sidebar = () => {


const [extented , setExtended] = useState(false)




  return (
    <div className='sidebar min-h-screen flex flex-col justify-between bg-[#f0f4f9] px-6 py-6  p-7 '>
      <div className="top">
        <img  className=' img menu block ml-2 w-5 cursor-pointer' onClick={() =>setExtended(prev => !prev)} src={assets.menu_icon}  alt=''/>
        <div className="new-chat mt-2 inline-flex items-center gap-4 px-2.5 py-1 bg-[#e6eaf1] rounded-full text-[17px] text-gray-500 cursor-pointer">
          <img className='img w-5' src={assets.plus_icon} alt="" />
          {extented?<p className='new pt-2'>New Chat</p>:null}
        </div>
        {extented
        ?
          <div className="recent flex flex-col">
          <p className='recent-title mt-4 mb-3'>Recent</p>
          <div className="recent-entry flex items-start gap-2.5 p-2.5 pr-10 rounded-[50px] text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
            <img className='img w-5' src={assets.message_icon} alt="" />
            <p>What is react...</p>

          </div>
        </div>
        :null
        }
      </div>
      <div className="bottom flex flex-col">
        <div className="bottom-item recent-entry pr-2.5 cursor-pointer">
          <img className='img w-5' src={assets.question_icon} alt="" />
          {extented? <p>Help</p> :null}
        </div>
        <div className="bottom-item recent-entry pr-2.5 cursor-pointer">
          <img className='img w-5' src={assets.history_icon} alt="" />
          {extented? <p>Activity</p> :null}
        </div>
        <div className="bottom-item recent-entry pr-2.5 cursor-pointer">
        <img className='img w-5' src={assets.setting_icon} alt="" />
          {extented? <p>Settings</p> :null}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;