import { CardProduct } from '../CardProduct'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { config } from '../../config'
import { Box } from '@mui/material'

export const Products = () => {
  const [products, setproducts] = useState([])

  const fetch = async () => {
        const url = `${config.VITE_API_URL}products`
        const response = await axios.get(url)

        setproducts(response.data)
    }

    useEffect (() => {
        fetch()
    }, [])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "5",
        justifyContent: "center",
      }}
    >
        {products.map((product) => (
            <CardProduct id={product.id} key={product.id} />
          ))}
    </Box>
  )
}
