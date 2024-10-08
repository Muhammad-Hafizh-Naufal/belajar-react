import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// import pages
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import NotFoundPage from "./Pages/404.jsx";
import ProductsPage from "./Pages/products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home Page</h1>,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
    errorElement: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
