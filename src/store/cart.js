import { persist } from "zustand/middleware";
import { create } from "zustand";

export const manejarCarrito = create(
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