import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  randomMovieid: null,
  trailerKey: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      state.movies = action.payload;
    },
    setMovieId(state, action) {
      state.randomMovieid = action.payload;
    },
    setKey(state, action) {
      state.trailerKey = action.payload;
    },
  },
});

export const { addMovies, setMovieId, setKey } = moviesSlice.actions;

export default moviesSlice.reducer;
