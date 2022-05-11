import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createMovieThunk, getAllMovieThunk } from "./movieThunk";
const initialState = {
  isLoading: false,
  movie: [],
  movies: [],
  loading: false,
}

export const createMovie = createAsyncThunk(
  'movie/create',
  async (formData, thunkAPI) => {
    return await createMovieThunk("movies/create-movie/create", formData, thunkAPI)
  }
)

export const getAllMovies = createAsyncThunk(
  'movie/movies',
  async (_, thunkAPI) => {
    // console.log(thunkAPI)
    return await getAllMovieThunk('movies/movie-list', thunkAPI)
  }
)


const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: {
    [getAllMovies.pending]: (state) => {
      state.loading = true
    },
    [getAllMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.movies = payload
    },
    [getAllMovies.rejected]: (state, { payload }) => {
      console.log(payload, 'rejected')
      toast.err(payload.msg)
      state.loading = false
    },
    [createMovie.pending]: (state) => {
      state.isLoading = true;
    },
    [createMovie.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.movie = payload;
      toast.success(payload.msg);
    },
    [createMovie.rejected]: (state, { payload }) => {
      console.log(payload, 'rejected');
      toast.error(payload.msg);
      state.isLoading = false;
    },
  }
})

export default movieSlice.reducer