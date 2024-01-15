import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: [],
  randomMovieid: null,
  trailerKey: null,
  trailerSoundOn: false,
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies(state, action) {
      if (action.payload.category === "now_playing")
        state.nowPlayingMovies = action.payload.movies;
      if (action.payload.category === "popular")
        state.popularMovies = action.payload.movies;
      if (action.payload.category === "top_rated")
        state.topRatedMovies = action.payload.movies;
      if (action.payload.category === "upcoming")
        state.upcomingMovies = action.payload.movies;
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
