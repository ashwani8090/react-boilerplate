import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_PERSISTED_STATE = {
    details: {},
    accessToken: null,
}

export const persistedSlice = createSlice({
    name: 'persistedSlice',
    initialState: INITIAL_PERSISTED_STATE,
    reducers: {
        setUserDetails: (state, action) => { state.details = action.payload },
        setAccessToken: (state, action) => { state.accessToken = action.payload }
    }
})

// Action creators are generated for each case reducer function
export const { setUserDetails, setAccessToken } = persistedSlice.actions

export default persistedSlice.reducer