import customFetch from "../../services/utils/axios";

export const createMovieThunk = async (url, user, states) => {
  try {
    console.log(url, user)
    const res = await customFetch.post(url, user)
    return res.data
  } catch (err) {
    return states.rejectWithValue(err.response.data.msg)
  }
}

export const listMovieThunk = async (_, states) => {
  try {
    const res = await customFetch.post('movies/movie-list')
    console.log(res, 'resFromListMovieThunk')
    return res.data
  } catch (err) {
    console.log(err)
    return states.rejectWithValue(err.response.data.msg)
  }
}