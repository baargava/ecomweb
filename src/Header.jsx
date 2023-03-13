import { AppBar, Box, IconButton, Toolbar, Typography,Menu,Drawer} from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink,Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {Badge} from '@mui/material';
import './App.css'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const Header = () => {
  
  const history = useNavigate();
  const[mobileOpen,setMobileOpen]=useState(false)

  const [isSignedIn,setIsSignedIn]=useState(true)
  const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleTrigger=()=>{
      setMobileOpen(!mobileOpen)
    }
    const drawer =(
      <Box onClick={handleTrigger} 
      sx={{textAlign:'center'}}>
        <Typography color="goldenrod" 
        variant="h6" component="div"
         sx={{flexGrow:1,my:2}}>
      <MenuIcon/></Typography>
        <ul className='mobi__menu' style={{textDecaration:'none'}}>
          <li >
            <NavLink className='mob-link' to={"/"} style={{color:'black',textDecaration:'none'}}>Home</NavLink>
          </li>
          <li >
            <NavLink className='mob-link'to={"/Products"} style={{color:'black',textDecaration:'none'}}>Products</NavLink>
          </li>
          <li >
            <NavLink className='mob-link' to={"/about"} style={{color:'black',textDecaration:'none'}}>About</NavLink>
          </li>
          <li >
            <NavLink className='mob-link' to={"/contact"} style={{color:'black',textDecaration:'none'}}>Contact</NavLink>
          </li>
          
         
        </ul>
      </Box>
    )
  return (
    <Box>
    <AppBar component="nav" sx={{bgcolor:'grey'}}>
    <Toolbar >
      <IconButton color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleTrigger}
              >
        <MenuIcon/>
      </IconButton>
      
    <Typography color="white" variant="h6" component="div" sx={{flexGrow:1}}>   
    <NavLink to={'/'} className='store'>
     STORE
     </NavLink>
    <Badge 
    sx={{display:{sm:"none"}}}
               id="basic-button"
          color="primary"  
          aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
    <ShoppingCartIcon  sx={{ marginLeft:'3em',fontSize:'25px',color:'white',display:{sm:"none"}}}/>
{" "}
          </Badge>
   
    </Typography>
    <Box sx={{display:{xs:'none',sm:'flex'},textDecoration:'none'}}>
      <ul className='nav__menu' style={{display:'flex'}}>
        <li className='link'>
          <NavLink to='/' style={{color:'white',textDecoration:'none'}}>Home</NavLink></li>
          <li className='link'>
          <NavLink to={'/products'}  style={{color:'white',textDecoration:'none'}}>Products</NavLink></li>
          <li className='link'>
          <NavLink to={'/about'} style={{color:'white',textDecoration:'none'}}>About</NavLink></li>
          <li className='link'>
          <NavLink to={'/contact'} style={{color:'white',textDecoration:'none'}}>Contact</NavLink></li>
        <li className='link'>
          <Badge 
                  id="basic-button"
                  badgeContent={0}
                  color="secondary"  
                  aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                  <ShoppingCartIcon/>
          </Badge>
        </li>
       
      </ul>
    </Box>
    <Menu
          id="basic-menu"
           anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >  
                
                    
                    <div className='card_details' style={{width:"24rem",padding:'1em',margin:'1.5em'}}>
                        <table>
                            <thead>
                                <tr>
                                    <td></td>
                                    <td style={{fontSize:'20px'}}>CART</td>
                                </tr>
                            </thead>
                            <tbody>
                                
                               
                            </tbody>
                        </table>
                    </div>

                    
                        
                   <div style={{width:"24rem",padding:10,position:"relative"}}>
                    
                    <p style={{fontSize:22}}>Your carts is empty</p>
                  

                   </div>
                    
                              
                             
                </Menu>

               

    </Toolbar>
    </AppBar>
    <Box component="nav">
    <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleTrigger}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
              width:"250px"}
              
            }}
          >
            <HighlightOffIcon/>
            {drawer}
          </Drawer>
      
    </Box>
    
   </Box>
  )
}

export default Header