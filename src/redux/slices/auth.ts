import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError, AxiosResponse } from "axios";

interface IAuthState {
  token: string;
  isLoading: boolean;
  isRejected: boolean;
  isFulfilled: boolean;
}

interface AuthResponse {
  msg: string;
  data: { token: string }[];
}

const initialState = {
  token: "",
  isLoading: false,
  isFulfilled: false,
  isRejected: false,
} satisfies IAuthState as IAuthState;

const loginThunk = createAsyncThunk<
  string,
  { nis: string; pwd: string },
  { rejectValue: { error: Error; status?: number } }
>("auth/login", async (form, { rejectWithValue }) => {
  try {
    const url = "https://fwg20-backend.vercel.app/siswa/account";
    const result: AxiosResponse<AuthResponse> = await axios.post(url, form);
    return result.data.data[0].token;
  } catch (error) {
    if (error instanceof AxiosError) return rejectWithValue({ error: error.response?.data, status: error.status });
    return String(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (prevState, { payload }: PayloadAction<IAuthState>) => {
      // state bentuknya adalah object
      // untuk memperbaharui object maka harus buat object baru
      const newState = {
        ...prevState,
        token: payload.token,
      };
      return newState;
    },
    removeToken: (prevState) => {
      prevState.token = initialState.token;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.isFulfilled = false;
        state.isRejected = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        console.log(payload);
        state.isLoading = false;
        state.isRejected = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.token = payload;
        state.isLoading = false;
        state.isFulfilled = true;
      });
  },
});

// yg diexport
// 1. reducer
// 2. action
export const authAction = {
  ...authSlice.actions,
  loginThunk,
};
export default authSlice.reducer;
