import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createMovieThunk } from "./movies";
const initialState = {
  isLoading: false,
  movie: []
}

export const createMovie = createAsyncThunk(
  'movie/createMovie',
  async (formData, thunkAPI) => {
    console.log(formData, 'formDataFromRedux')
    return (
      createMovieThunk("movies/create-movie/create", formData, thunkAPI)
    )
  }
)

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  extraReducers: {
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
    }
  }
})

export default movieSlice.reducer