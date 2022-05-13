import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { createSubscriptionThunk, getAllSubscriptionThunk } from "./subscriptionThunk";

const initialState = {
  isLoading: false,
  createdSubscription: false,
  subscriptionList: [],
  isLoadingForGetAllSubscription: false
}

export const createSubscription = createAsyncThunk(
  'subscription/create',
  async (formData, thunkAPI) => {
    return createSubscriptionThunk('subscription-plan/create', formData, thunkAPI)
  }
)

export const getAllSubscription = createAsyncThunk(
  'subscription/subscriptions',
  async (_, thunkAPI) => {
    return getAllSubscriptionThunk('subscription-plan', thunkAPI)
  }
)

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  extraReducers: {
    [getAllSubscription.pending]: (state) => {
      state.isLoadingForGetAllSubscription = true
    },
    [getAllSubscription.fulfilled]: (state, { payload }) => {
      state.subscriptionList = payload
      state.isLoadingForGetAllSubscription = false
    },
    [getAllSubscription.rejected]: (state, { payload }) => {
      console.log(payload, 'rejected')
      // toast.error(payload)
      state.isLoadingForGetAllSubscription = false
    },
    [createSubscription.pending]: (state) => {
      state.isLoading = true
    },
    [createSubscription.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.createSubscription = true
      toast.success("Successfully created")
    },
    [createSubscription.rejected]: (state, { payload }) => {
      console.log(payload, 'rejected')
      state.isLoading = false
    }
  }
})

export default subscriptionSlice.reducer;