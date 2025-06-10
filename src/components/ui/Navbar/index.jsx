import { AppBar, Container, Typography, Box, Button, Toolbar } from "@mui/material"
import { Link } from "react-router-dom"


export const Navbar = () => {
  return (
    <AppBar position="static" >
        <Container>
            <Toolbar>
                <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  textTransform: "upperCase",
                  flexGrow: 1,
                }}
              >
                Tienda
              </Typography>

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Home
                  </Button>
                </Link>
                <Link to={"/productos"} style={{ textDecoration: "none" }}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    Productos
                  </Button>
                </Link>
              </Box>
            </Toolbar>  
        </Container>
    </AppBar>
  )
}
