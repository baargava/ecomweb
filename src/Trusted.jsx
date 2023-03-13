import { Box, ImageList, Typography ,ImageListItem, Card, CardMedia, IconButton} from '@mui/material'
import React from 'react'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import Face4Icon from '@mui/icons-material/Face4';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Trusted = () => {
  return (
    <>
    <Box sx={{backgroundColor:'#eee',height:'7em',marginBottom:'2em'}}>
      <Typography variant='h5' sx={{marginLeft:'22em'}}>Trusted By 10M+ Customers</Typography>
      <IconButton sx={{marginLeft:'20em'}}>
        <InsertEmoticonIcon sx={{fontSize:'3em',marginRight:'0.6em'}}/>
        <SentimentSatisfiedAltIcon sx={{fontSize:'3em',marginRight:'0.6em'}}/>
        <Face4Icon sx={{fontSize:'3em',marginRight:'0.6em'}}/>
        <EmojiEmotionsIcon sx={{fontSize:'3em',marginRight:'0.6em'}}/>

      </IconButton>
    </Box>
    </>
  )
}


export default Trusted