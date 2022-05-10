import customFetch from "../../services/utils/axios";

export const registerUserThunk = async (url, user, states) => {
    try {
        const res = await customFetch.post(url, user)
        return res.data;
    } catch (err) {
        return states.rejectWithValue(err.response.data.msg)
    }
}

export const loginUserThunk = async (url, user, states) => {
    try {
        const res = await customFetch.post(url, user)
        return res.data
    } catch (err) {
        return states.rejectWithValue(err.response.data.msg)
    }
}