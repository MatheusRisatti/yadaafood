import { createBrowserRouter } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Home } from "../pages/Home";
import { Products } from "../products";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/products',
    element: <Products />
  }
])
