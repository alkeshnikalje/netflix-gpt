import React from "react";
import Home from "./components/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SigninSignup from "./components/signin/SigninSignup";
import BrowseAppLayout from "./components/browse/BrowseAppLayout";
import BrowseHome from "./components/browse/BrowseHome";
import MyList from "./components/browse/MyList";
import MovieDetails from "./components/movies/MovieDetails";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <SigninSignup /> },
  {
    path: "/browse",
    element: <BrowseAppLayout />,
    children: [
      { path: "/browse", element: <BrowseHome /> },
      { path: "/browse/mylist", element: <MyList /> },
      { path: "/browse/:movieId", element: <MovieDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
