import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API} from '../../api';

const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};

export const login = createAsyncThunk('user/login', async params => {
  try {
    const response = await API.post('auth/login', params);
    console.log('response', response);
    return response.data;
  } catch (error) {
    console.log('error', error);
  }
});

const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    logout(state) {
      state.isLoading = true;
      state.userData = null;
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const {logout} = AuthSlice.actions;
export default AuthSlice.reducer;
