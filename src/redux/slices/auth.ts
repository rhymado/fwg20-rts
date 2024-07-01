import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
  token: string;
}

const initialState = {
  token: "",
} satisfies IAuthState as IAuthState;

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
});

// yg diexport
// 1. reducer
// 2. action
export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
