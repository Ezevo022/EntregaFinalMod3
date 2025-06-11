import {
  AppBar,
  Container,
  Typography,
  Box,
  Button,
  Toolbar,
  IconButton,
  Badge,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { manejarCarrito } from "../../../store/cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Drawer } from "antd";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuIcon from "@mui/icons-material/Menu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const { carrito, eliminar } = manejarCarrito();

  const matches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <AppBar>
        <Container>
          {matches ? (
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
                <IconButton onClick={() => setOpen(true)}>
                  <Badge badgeContent={carrito.length} color="secondary">
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
              </Box>
            </Toolbar>
          ) : (
            <Toolbar>
              <Typography sx={{
                  flexGrow: 1,
                }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  onClick={() => setOpenMenu(!openMenu)}
                  >
                  <MenuIcon />
                </IconButton>
              </Typography>
              <IconButton onClick={() => setOpen(true)}>
                  <Badge badgeContent={carrito.length} color="secondary">
                    <ShoppingCartIcon sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
            </Toolbar>
          )}
        </Container>
      </AppBar>

      <Drawer
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        placement="left"
      >
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Button sx={{ my: 2, display: "block" }}>Home</Button>
        </Link>
        <Link to={"/productos"} style={{ textDecoration: "none" }}>
          <Button sx={{ my: 2, display: "block" }}>Productos</Button>
        </Link>
      </Drawer>

      <Drawer open={open} onClose={() => setOpen(false)}>
        {carrito.map((producto) => (
          <Box
            sx={{
              display: "flex",
              gap: 2,
              margin: "25px",
              justifyContent: "space-between",
            }}
          >
            <img
              src={producto.image}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
            <Typography variant="body1">{producto.title}</Typography>
            <Typography variant="body1">{producto.cantidad}</Typography>
            <IconButton onClick={() => eliminar(producto.id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        ))}
      </Drawer>
    </>
  );
};