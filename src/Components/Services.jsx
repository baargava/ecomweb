import React from 'react'
import { Box} from '@mui/system'
import { Card } from '@mui/material'
import {CardContent} from '@mui/material'
import {Typography} from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentsIcon from '@mui/icons-material/Payments';

const Services = () => {
  return (
    <>
    <Box sx={{display:'flex' ,marginInline:'13em',paddingBlock:'5em'}}>
      <Card sx={{width:'40em',height:'20em',marginRight:'2em',backgroundColor:'#eee'}}>
        <CardContent>
          <Typography variant='h5' sx={{marginTop:'4em'}}>
            <LocalShippingIcon sx={{color:'blue',marginLeft:'4em'}}/>
     <p style={{fontSize:'0.7em'}}>            Super Fast And Free Delivery</p>  </Typography>
        </CardContent>
      </Card>
      <Box sx={{marginRight:'1em'}}>
        <Card sx={{width:'20em',marginBottom:'2em',height:'8em',backgroundColor:'#eee'}}>
          <CardContent>
            
          <Typography variant='h5' sx={{marginTop:'1em'}}>
            <SecurityIcon sx={{color:'blue'}}/>
     <p style={{fontSize:'0.7em',marginTop:'-1.4em',marginLeft:'2em'}}>Non-Contact Shipping</p> </Typography>
          </CardContent>
        </Card>
        <Card sx={{width:'20em',marginBottom:'0em',height:'10em',backgroundColor:'#eee'}}>
          <CardContent>
          <Typography variant='h5' sx={{marginTop:'1em'}}>
            <CurrencyRupeeIcon sx={{color:'blue'}}/>
     <p style={{fontSize:'0.7em',marginTop:'-1.4em',marginLeft:'2em'}}>Money-back Guaranteed</p> </Typography>
          </CardContent>
        </Card>
      </Box>
      <Card  sx={{width:'40em',height:'20em',marginRight:'2em',backgroundColor:'#eee'}}>
        <CardContent>
        <Typography variant='h5' sx={{marginTop:'4em'}}>
            <PaymentsIcon sx={{color:'blue',marginLeft:'4em'}}/>
     <p style={{fontSize:'0.7em'}}>   Super Secure payment System</p>  </Typography>
        </CardContent>
      </Card>
    </Box>

    </>
  )
}

export default Services