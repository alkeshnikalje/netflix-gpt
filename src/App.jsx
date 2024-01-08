import React from "react";
import Home from "./components/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SigninSignup from "./components/signin/SigninSignup";
import BrowseHeader from "./components/browse/BrowseHeader";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SigninSignup /> },
  { path: "/browse", element: <BrowseHeader /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
