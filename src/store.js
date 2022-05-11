import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/userSlice';
import movieSlice from './features/Movies/movieSlice'
import getMoviesSlice from "./features/Movies/movieSlice";
export const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        // getMovies: getMoviesSlice
    }
})