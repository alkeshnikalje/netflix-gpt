import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./components/user/userSlice";
import moviesReducer from "./components/movies/moviesSlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default store;
