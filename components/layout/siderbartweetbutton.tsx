import React from 'react'
import {FaFeather} from "react-icons/fa";
const SideBarTweetButton = () => {
  return (
    <div >
            <div className="mt-6 lg:hidden rounded-full h-14 w-14 p-4 flex items-center bg-sky-500 hover:bg-opacity-50 transition cursor-pointer">
            <FaFeather size={24} color="white"/>
            </div>
            <div className="mt-6 hidden lg:block rounded-full px-4 py-2 flex bg-sky-500 hover:bg-opacity-90 transition cursor-pointer">
                <p className="hidden lg:block text-center font-semibold text-white text-[20px]">Tweet</p>
            </div>
        </div>
  )
}

export default SideBarTweetButton