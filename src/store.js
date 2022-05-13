import { configureStore } from "@reduxjs/toolkit";
import userSlice from './features/users/userSlice';
import movieSlice from './features/Movies/movieSlice'
import subscriptionSlice from "./features/Subscription/subscriptionSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
        subscription: subscriptionSlice
    }
})