import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import axios from 'axios';
import { config } from '../../config';
import { Typography, Box, Button } from '@mui/material';
import { manejarCarrito } from "../../store/cart";
import { Image } from "antd";

export const Product = () => {
  const { id }  = useParams();
  
  const [product, setproduct] = useState([]);

  const { agregar } = manejarCarrito();

  const productId = parseInt(id);

  // Validar que el ID esté entre 1 y 20
  if (isNaN(productId) || productId < 1 || productId > 20) {
    return <Navigate to="/productos" replace />
  }

  const fetch = async () => {
        const url = `${config.VITE_API_URL}products/${id}`
        const response = await axios.get(url)

        setproduct(response.data)
    }

    useEffect (() => {
        fetch()
    }, [])  

    const handleAddProducto = () => {
      agregar(product);
    };

  return (
    <Box sx={{ display: "flex", width: "80vw", margin: "auto", paddingTop: "80px", backgroundColor: '#f5f5f5' }}>
        <Image
          src={product.image}
          height={300}
          width={"100%"}
          style={{ objectFit: "contain", margin: 0 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: 2 }}>
            <Typography variant="h4">{product.title}</Typography>
            <Typography variant="body1">{product.description}</Typography>
            <Button variant='contained' onClick={handleAddProducto}>Comprar</Button>
        </Box>
    </Box>
  )
}
