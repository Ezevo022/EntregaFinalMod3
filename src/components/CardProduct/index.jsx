import { useState, useEffect } from "react"
import axios from "axios"
import { config } from "../../config"
import { 
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Box,
} from "@mui/material"

export const CardProduct = ({ id }) => {
    const [product, setProduct] = useState({})

    const fetch = async () => {
        const url = `${config.VITE_API_URL}products/${id}`
        const response = await axios.get(url)

        setProduct(response.data)
    }

    useEffect (() => {
        fetch()
    }, [])

  return (
    <Card sx={{ width: "350px", margin: "20px" }}>
        <CardHeader title={product.title} subheader={product.category} />
        <CardMedia component={"img"} image={product.image} height="200" />
        <CardContent>
            <Typography variant="body1">{product.description}</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 2 }}>
                <Button variant="contained">Comprar</Button>
                <Button variant="outlined">Ver</Button>
            </Box>
        </CardContent>
    </Card>
)
}
