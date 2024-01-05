import React from "react";
import Home from "./components/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SigninSignup from "./components/signin/SigninSignup";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SigninSignup /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
