import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

function SocialButton({social_icons, social_links, social_text}) {
  return (
    <>
          <Link className='group relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-blue-700 hover:text-white shadow-lg cursor-pointer transform transition-transform duration-200 hover:scale-110' to = {social_links}>
            <span className='absolute bottom-14 px-2 py-1 text-sm text-white bg-blue-700 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none'>
            {social_text}
            </span>
            {social_icons}
          </Link>
    </>
  )
}

export default SocialButton