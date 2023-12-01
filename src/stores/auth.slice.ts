import { createSlice } from '@reduxjs/toolkit'
interface IAuthState {
  profile: unknown
}

const initialState: IAuthState = {
  profile: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProfileUser: (state, action) => {
      state.profile = action.payload
    }
  }
})

export const { setProfileUser } = authSlice.actions
export default authSlice.reducer
