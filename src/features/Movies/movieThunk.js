import customFetch from "../../services/utils/axios";

export const createMovieThunk = async (url, user, thunkAPI) => {
  try {
    const res = await customFetch.post(url, user)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
}

export const getAllMovieThunk = async (url, thunkAPI) => {
  try {
    const res = await customFetch.get(url)
    return res.data
  } catch (err) {
    console.log(err)
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
}