import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUserThunk, registerUserThunk } from "./userThunk";
import toast from "react-hot-toast";
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from "../../services/utils/localStorage";

const initialState = {
    isLoading: false,
    user: getUserFromLocalStorage()
};

export const registerUser = createAsyncThunk(
    'user/registerUser',
    async (user, thunkAPI) => {
        return (
            registerUserThunk('/admin/signup', user, thunkAPI)
        )
    }
)

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        return loginUserThunk('/admin/signin', user, thunkAPI)
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = null
            removeUserFromLocalStorage()
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            toast.success(payload.msg)
        },
        [registerUser.rejected]: (state, { payload }) => {
            console.log(payload, 'payloadR')
            const resAPI = payload.msg || "Back-end Error"
            toast.error(resAPI)
            state.isLoading = false
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            console.log(payload, "fullfilled");
            console.log(state, 'statesUser')
            state.user = payload;
            toast.success("Welcome back");
            addUserToLocalStorage(payload);
            state.isLoading = false;
        },
        [loginUser.rejected]: (state, { payload }) => {
            console.log(payload, 'rejected')
            const resAPI = payload || 'Something went wrong'
            toast.error(resAPI)
            state.isLoading = false
        }
    }

})

export const { logOut } = userSlice.actions

export default userSlice.reducer;