import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        authUser: null,
        authToken: localStorage.getItem('monthlyToken'),
        authEmail: localStorage.getItem('monthlyEmail'),
        userID: localStorage.getItem('monthlyUserID'),
        sortedExpense: [],
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

        sortExpense: (state, action) => {
            // sorted expenses by date
            state.sortedExpense = action.payload.expenses.sort(
                (a, b)=> new Date(b.created_at) - new Date(a.created_at)
            )
        }

    }
})

// Export action to use in components
export const { setAuth, clearAuth, sortExpense } = authSlice.actions;

// Export the reducer to be used in the store configuration
export default authSlice.reducer;