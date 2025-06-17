import { persist } from "zustand/middleware";
import { create } from "zustand";

// Se crea el estado globlal con Zustand para manejar el carrito
export const manejarCarrito = create(
  // Se utiliza persist para mantener el estado global en este caso en
  // el localstorage y asi mantener el carrito
  persist(
    (set) => ({
      carrito: [],
      agregar: (producto) =>
        set((state) => ({
          carrito: state.carrito.some((item) => item.id === producto.id)
            ? state.carrito
            : [...state.carrito, { ...producto, cantidad: 1 }],
        })),
      eliminar: (id) =>
        set((state) => ({
          carrito: state.carrito.filter((p) => p.id !== id),
        })),
    }),
    {
      name: "carrito",
    }
  )
);