import { createSlice } from "@reduxjs/toolkit";
import { REHYDRATE } from "redux-persist";
const initialState = {
  myMovieList: [],
};

const myMoviesSlice = createSlice({
  name: "myMovies",
  initialState,
  reducers: {
    addMovieToMyList(state, action) {
      const movie = state.myMovieList.find(
        (prevMovie) => prevMovie.id == action.payload.movieId
      );
      console.log(movie);
      if (movie) return;
      state.myMovieList.push(action.payload.movie);
    },
    removeFromMyList(state, action) {
      state.myMovieList = state.myList.filter(
        (movie) => movie.id != action.payload
      );
    },
  },
});

export const { addMovieToMyList, removeFromMyList } = myMoviesSlice.actions;

export default myMoviesSlice.reducer;
