import { CardProduct } from '../CardProduct'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config'
import { Box, CircularProgress } from '@mui/material'

export const Products = () => {
  const [products, setProducts] = useState([]);
  
  // Hook utilizado para saber si esta cargando la pagina
  const [isLoading, setIsLoading] = useState(true);

  const fetch = async () => {
    try {
      const url = `${config.VITE_API_URL}products`;
      const response = await axios.get(url);
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

    useEffect (() => {
        fetch()
    }, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 2,
        justifyContent: "center",
        paddingTop: "80px",
        backgroundColor: '#f5f5f5',
      }}
    >
      {/* Se controla si ya cargo la pagina para mostrar el resultado o el circulo 
      de pagina cargando en caso de que por algun motivo no funcione */}
        {isLoading ? (
        <div
          style={{
            display: "flex",
            height: "500px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        products.map((product) => (
          <CardProduct id={product.id} key={product.id} />
        ))
      )}
    </Box>
  )
}
