import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/userSlice';
import movieSlice from './features/users/movieSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice
    }
})