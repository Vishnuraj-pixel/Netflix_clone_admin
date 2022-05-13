import customFetch from "../../services/utils/axios"


export const createSubscriptionThunk = async (url, formData, thunkAPI) => {
  try {
    const res = await customFetch.post(url, formData)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
}

export const getAllSubscriptionThunk = async (url, thunkAPI) => {
  try {
    const res = await customFetch.get(url)
    return res.data
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.msg)
  }
}