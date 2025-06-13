import { useState, useEffect } from "react"
import axios from "axios"
import { config } from "../../config"
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material"
import { manejarCarrito } from "../../store/cart"
import { Image } from "antd"
import { Link } from "react-router-dom"

export const CardProduct = ({ id }) => {
  const [product, setProduct] = useState({})

  const { agregar } = manejarCarrito();

  const fetch = async () => {
    const url = `${config.VITE_API_URL}products/${id}`
    const response = await axios.get(url)

    setProduct(response.data)
  }

  useEffect(() => {
    fetch()
  }, [])

  const handleAddProducto = () => {
    agregar(product);
  };

  return (
    <Card sx={{ width: "350px", margin: "20px", display: "flex", flexDirection: "column" }}>
      <CardHeader title={product.title} subheader={product.category} />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column", padding: 0 }}>
        <Image
          src={product.image}
          height={200}
          width={"100%"}
          style={{ objectFit: "cover", margin: 0 }}
        />
        <Box sx={{ flexGrow: 1, padding: 2 }}>
          <Typography variant="body1">{product.description}</Typography>
        </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2, paddingX: 2, paddingBottom: 2 }}>
            <Button variant="contained" onClick={handleAddProducto}>
              Comprar
            </Button>
            <Link to={`/productos/${id}`}>
              <Button variant="outlined">Ver</Button>
            </Link>
          </Box>
      </CardContent>
    </Card>
  )
}
