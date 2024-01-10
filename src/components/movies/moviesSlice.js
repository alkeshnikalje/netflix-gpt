import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  randomMovieid: null,
  trailerKey: null,
  trailerSoundOn: false,
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
    setTrailerSoundOn(state) {
      state.trailerSoundOn = !state.trailerSoundOn;
    },
  },
});

export const { addMovies, setMovieId, setKey, setTrailerSoundOn } =
  moviesSlice.actions;

export default moviesSlice.reducer;
