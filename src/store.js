import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./components/user/userSlice";
import moviesReducer from "./components/movies/moviesSlice";
import myMoviesReducer from "./components/user/userMoviesSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "mylist",
  storage,
  whitelist: ["myMovies"],
};

const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  myMovies: myMoviesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);
export { store, persistor };
