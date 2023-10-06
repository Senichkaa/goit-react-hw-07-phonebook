import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import { handlePending, handleRejected, handleFulfilled } from './handlers';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
    items: [],
    isLoading: false,
    error: null,
    },
    extraReducers: {
        [fetchContacts.pending]:handlePending,
        [fetchContacts.fulfilled](state, action) {
          handleFulfilled(state);
          state.items = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,

        [addContact.pending]: handlePending,
          [addContact.fulfilled](state, action) {
            handleFulfilled(state);
            state.items.push(action.payload);
          },
          [addContact.rejected]: handleRejected,

          [deleteContact.pending]: handlePending,
          [deleteContact.fulfilled](state, action) {
            handleFulfilled(state);
            const index = state.items.findIndex(
              task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
          },
          [deleteContact.rejected]: handleRejected,
      },
})

export const contactsReducer = contactSlice.reducer;



// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// const contactsStartState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsStartState,
//   reducers: {
//     addContact: (state, action) => {
//       state.items = [action.payload, ...state.items];
//     },

//     deleteContact: (state, action) => {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//   },
// });

// export const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const getContacts = state => state.contacts.items;
