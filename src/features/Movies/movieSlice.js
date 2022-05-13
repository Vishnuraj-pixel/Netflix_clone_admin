import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createMovieThunk, getAllMovieThunk, updateMovieThunk } from "./movieThunk";

const initialState = {
  isLoading: false,
  movie: [],
  movies: {
    crewMembersNotAdded: [],
    crewMembersAdded: [],
  },
  loading: false,
  openModalPopup: false,
  movieModalData: {},
  movieUpToDate: false,
  loadingForUpdate: false,
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

export const updateMovie = createAsyncThunk(
  'movie/updateMovie',
  async (formData, thunkAPI) => {
    return await updateMovieThunk('movieDetail/create-movie-detail/create', formData, thunkAPI)
  }
)

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    openUpdateMovieModal: (state, data) => {
      state.openModalPopup = true;
      console.log(data, 'datafromupdate')
      state.movieModalData = data.payload;
    },
    closeUpdateMovieModal: (state) => {
      state.openModalPopup = false;
    }
  },
  extraReducers: {
    [getAllMovies.pending]: (state) => {
      state.loading = true
    },
    [getAllMovies.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const crewMembersNotIn = payload.filter((movie) => {
        return movie.crewMembers.length == 0
      })
      const crewMembersIn = payload.filter((movie) => {
        return movie.crewMembers.length > 0
      })
      state.movies.crewMembersNotAdded = crewMembersNotIn;
      state.movies.crewMembersAdded = crewMembersIn
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
    [updateMovie.pending]: (state) => {
      state.loadingForUpdate = true
    },
    [updateMovie.fulfilled]: (state, { payload }) => {
      console.log(payload, 'fromMovieSliceUpdateMovie')
      toast.success("Successfully created")
      state.movieUpToDate = true
      state.loadingForUpdate = false
    },
    [updateMovie.rejected]: (state, { payload }) => {
      console.log(payload, 'rejected')
      state.loadingForUpdate = false
    }

  }
})

export const { openUpdateMovieModal, closeUpdateMovieModal } = movieSlice.actions

export default movieSlice.reducer