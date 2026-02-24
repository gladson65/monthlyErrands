import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authUser: null,
        authToken: localStorage.getItem('monthlyToken'),
        authEmail: localStorage.getItem('monthlyEmail'),
        userID: localStorage.getItem('monthlyUserID'),
        loading: true,
    },

    reducers: {
        setAuth: (state, action) => {
            state.authUser = action.payload.user;
            state.authToken = action.payload.token;
            state.authEmail = action.payload.email;
            state.userID = action.payload.userID;
            state.loading = false;

            // Persist token to localStorage for session persistence
            if (action.payload.token) {
                localStorage.setItem('monthlyToken', action.payload.token);
            }
        },

        clearAuth: (state) => {
            state.authUser = null; // Clear user data
            state.authToken = null; // Clear token
            state.loading = false; // Set loading to false
        },

    }
})

// Export action to use in components
export const { setAuth, clearAuth } = authSlice.actions;

// Export the reducer to be used in the store configuration
export default authSlice.reducer;