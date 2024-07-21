import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

import "./index.css";

import App from "./App.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import SignInPage from "./pages/Auth/SignInPage.tsx";
import SignUpPage from "./pages/Auth/SignUpPage.tsx";

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },

  {
    path: '/sign-up',
    element: <SignUpPage />
  },

  {
    path: '/sign-in',
    element: <SignInPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
