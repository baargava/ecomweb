import { IconButton } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
    <div className='foot-block'>
      <div className='overfoot'>
        <h5>Ready to get started? Talk to us today</h5>
        <NavLink to='/contact'>
        <button className='foot-btn'>Get Started</button>
        </NavLink>
      </div>
      <div className='foot-sec'>
        <div className='foot1'><p>Store</p></div>
        <div className='foot2'>
          <form style={{display:'flex',flexDirection:'column'}}>
            <p>for more updates subscribe</p>
            <input type='email' placeholder='enter email' style={{padding:'0.3em'}}/>
            <input type='submit' value='subscribe'style={{padding:'0.1em',fontSize:'1.3em'}}/>
          </form>
        </div>
        <div className='foot3'>
          <p>Follow Us</p>
          <IconButton sx={{display:'flex'}}>
          <YouTubeIcon/>
          <TwitterIcon/>
          <FacebookIcon/>
            
          </IconButton>
        </div>
        <div className='foot4'>
        <h6>Call Us</h6>
              <h6>+91 12345678978</h6>
        </div>
      </div>
      <div className='lower-foot'>
       <hr/>
       <div className='lowerfoot'>
        <p>BHARAGAVA@All Rights Reserved </p>
        <p className='pfoot'>Terms & Conditions</p>
        

       </div>
      </div>
    </div>
    </>
  )
}

export default Footer