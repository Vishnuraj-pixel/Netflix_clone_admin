// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getAllMovieThunk } from "../users/movieThunk";

// const initialState = {
//   loading: false,
//   movieList: []
// }

// export const getAllMovies = createAsyncThunk(
//   'getMovies/listMovies',
//   async (_, thunkAPI) => {
//     return getAllMovieThunk('/movies/movie-list', thunkAPI)
//   }
// )


// const getMoviesSlice = createSlice({
//   name: 'getMovies',
//   initialState,
//   reducer: {},
//   extraReducers: {
//     [getAllMovies.pending]: (state) => {
//       state.loading = true
//     },
//     [getAllMovies.fulfilled]: (state, { payload }) => {
//       console.log(state, 'states')
//       state.loading = false;
//       state.movieList = payload;
//     },
//     [getAllMovies.rejected]: (state, { payload }) => {
//       console.log(payload, 'rejected')
//       state.loading = false
//     }
//   }
// })

// export default getMoviesSlice.reducer;