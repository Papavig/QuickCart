import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SignInPage from "./pages/Auth/SignInPage.tsx";
import SignUpPage from "./pages/Auth/SignUpPage.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Products from "./pages/Products/ProductItems.tsx";
import ProductsPage from "./pages/Products/ProductsPage.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/auth/register",
    element: <SignUpPage />,
  },

  {
    path: "/auth/login",
    element: <SignInPage />,
  },

  {
    path: "/admin",
    element: <Dashboard />,
  },

  {
    path: "/Products",
    element: <ProductsPage />,
  },

  {
    path: "/Products/:product_id",
    element: <Products />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
