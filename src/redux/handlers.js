export const pendingHandle = state => {
    state.isLoading = true;
}

export const rejectedHandle = (state,action)=> {
    state.isLoading = true;
    state.error = action.payload
}

export const fulfilledHandle = state => {
    state.isLoading = false;
    state.error = null;
}