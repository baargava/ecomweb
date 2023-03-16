import React from 'react'
import Products from '../Products'
import styled from 'styled-components'
import { Box } from '@mui/system'
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { NavLink, useParams } from 'react-router-dom'
import { useProductContext } from '../Context/ProductContext'

const GridView = ({products}) => {
const {singleProduct}=useProductContext();
const{id}=useParams();

  return (


    <div className='grid-section'>
    <div className=' container1 grid-three-section'>
     {products.map((ele)=>{
      return(
        <NavLink to={`/singleproduct/${ele.id}`}>
        <Box sx={{}} key={ele.id}>
          <Card sx={{width:"17em" ,height:"20em"}}>
            <CardContent>
             
              <CardMedia image={ele.image}
              sx={{marginLeft:'1em'}}
               component="img"
                                       alt="image"
                                       height="200" width="200" />

<Typography sx={{textDecaration:"none"}}>
<h6 >  {ele.title}
</h6>
    Price:{ele.price}
              </Typography>
              <NavLink to={"/cart"}>
          <Button variant="contained">Add To Cart</Button>
          </NavLink>
            </CardContent>
          </Card>
          
        </Box>
        </NavLink>

      )
     })}
    </div>
    </div>

  )
}
 

export default GridView