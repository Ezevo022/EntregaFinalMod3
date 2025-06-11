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

export const CardProduct = ({ id }) => {
    const [product, setProduct] = useState({})

    const { agregar } = manejarCarrito();

    const fetch = async () => {
        const url = `${config.VITE_API_URL}products/${id}`
        const response = await axios.get(url)

        setProduct(response.data)
    }

    useEffect (() => {
        fetch()
    }, [])

    const handleAddProducto = () => {
        agregar(product);
    };

  return (
    <Card sx={{ width: "350px", margin: "20px" }}>
        <CardHeader title={product.title} subheader={product.category} />
        <CardContent sx={{ padding: 0 }}>
        <Image
          src={product.image}
          height={200}
          width={"100%"}
          style={{ objectFit: "cover", margin: 0 }}
        />
        <Box sx={{ padding: 2 }}>
          <Typography variant="body1">{product.description}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
            <Button variant="contained" onClick={handleAddProducto}>
              Comprar
            </Button>
            <Button variant="outlined">Ver</Button>
          </Box>
        </Box>
        </CardContent>
    </Card>
)
}
