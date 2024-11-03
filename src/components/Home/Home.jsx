import React from 'react'
import SocialButton from '../SocialButton/SocialButton'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Home() {
  return (
    <>
    <div className="card flex gap-5 justify-center pt-10 font-sans">
          <SocialButton 
            social_text='Facebook'
            social_icons={<FaFacebookF />}
            social_links="https://www.facebook.com/profile.php?id=61551685600240"
          />
          <SocialButton 
            social_text='Linkedin'
            social_icons={<FaLinkedinIn />}
            social_links="https://www.linkedin.com/in/md-rezwan-islam-4886ba2a8/"
          />
          <SocialButton 
            social_text='Twitter'
            social_icons={<FaTwitter />}
            social_links="https://x.com/Rezwan971"
          />         
    </div>
    </>
  )
}

export default Home