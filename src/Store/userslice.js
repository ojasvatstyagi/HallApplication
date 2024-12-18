import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    userData: null,
    isLoading:false
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.isLoading=false;
      state.userData = action.payload;
    },
    loading:(state)=>{
        state.isLoading = true;
    },
    logout: (state) => {
      // Clear user state on logout
      state.isLoading=false;
      state.isLoggedIn = false;
      state.userData = null;
    },
    loginFailed: (state) => {
      state.isLoading = false;
      state.isLoggedIn = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { login,loading, logout, loginFailed } = userSlice.actions

export default userSlice.reducer
