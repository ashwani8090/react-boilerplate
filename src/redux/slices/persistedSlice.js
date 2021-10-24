import { createSlice } from '@reduxjs/toolkit'

export const INITIAL_PERSISTED_STATE = {
    firstname: '',
    lastname: '',
    details: {},
    accessToken: null,
}

export const persistedSlice = createSlice({
    name: 'persistedSlice',
    initialState: INITIAL_PERSISTED_STATE,
    reducers: {
        userDetails: (state, action) => { state.details = action.payload },
        setAccessToken: (state, action) => { state.accessToken = action.payload }
    }
})

// Action creators are generated for each case reducer function
export const { userDetails, setAccessToken } = persistedSlice.actions

export default persistedSlice.reducer