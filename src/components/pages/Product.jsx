import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { config } from '../../config';
import { Typography, Box, Button } from '@mui/material';

export const Product = () => {
  const { id }  = useParams();
  
  const [product, setproduct] = useState([])

  const fetch = async () => {
        const url = `${config.VITE_API_URL}products/${id}`
        const response = await axios.get(url)

        setproduct(response.data)
    }

    useEffect (() => {
        fetch()
    }, [])  


  return (
    <Box sx={{ display: "flex", width: "80vw", margin: "auto"}}>
        <img 
        src={product.image} 
        alt={product.title}
        style={{ objectFit: "cover", height: "300px" }}/>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button variant='contained'>Comprar</Button>
        </Box>
    </Box>
  )
}
