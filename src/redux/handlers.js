export const handlePending = state => {
    state.isLoading = true;
}

export const handleRejected = (state,action)=> {
    state.isLoading = true;
    state.error = action.payload
}

export const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
}