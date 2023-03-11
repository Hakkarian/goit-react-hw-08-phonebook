import { createSlice } from '@reduxjs/toolkit';
import { fetchAddContacts, fetchAllContacts, fetchdDeleteContact } from './taskoperations';

const initialState = {
  contacts: [],
  error: null,
  loading: false
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.pending, state => ({
        ...state,
        loading: true
      }))
      .addCase(fetchAllContacts.fulfilled, (state, { payload }) => ({
        ...state,
        contacts: [...payload],
        loading: false,
      }))
      .addCase(fetchAllContacts.rejected, (state, { payload }) => ({
        ...state,
          error: payload,
          loading: false,
      }))
      .addCase(fetchAddContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchAddContacts.fulfilled, (state, { payload }) => ({
        ...state,
        contacts: [...state.contacts, { ...payload }],
        loading: false
      }
    ))
      .addCase(fetchAddContacts.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchdDeleteContact.pending, state => {
        state.loading = true;
      })
      .addCase(fetchdDeleteContact.fulfilled, (state, { payload }) => {
        state.loading = false;
        const index = state.contacts.findIndex(item => item.id === payload.id)
        state.contacts.splice(index, 1)
      })
      .addCase(fetchdDeleteContact.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

  },
});

// // export const {
// //   fetchAllActContactsLoading,
// //   fetchAllActContactsSuccess,
// //   fetchAllActContactsError,
// //   fetchAddActContactsLoading,
// //   fetchAddActContactsSuccess,
// //   fetchAddActContactsError,
// //   fetchDeleteActContactsLoading,
// //   fetchDeleteActContactsFulfilled,
// //   fetchDeleteActContactsRejected,
// // } = rootSlice.actions;

export default contactsSlice.reducer;



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const initialState = {

// }

// export const contactsApi = createApi({
//   reducerPath: 'contacts',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://63d0f841d5f0fa7fbdc0f047.mockapi.io',
//   }),
//   tagTypes: ['Contact'],
//   endpoints: ((builder) => ({
//     getAllContacts: builder.query({
//       query: () => `/contacts`,
//       providesTags: ['Contact']
//     }),
//     addContact: builder.mutation({
//       query: (payload) => ({
//         url: `/contacts`,
//           method: 'POST',
//           body: payload
//       }),
//       invalidatesTags: ['Contact']
//     }),
//     deleteContact: builder.mutation({
//       query: (id) => ({
//         url: `/contacts/${id}`,
//         method: 'DELETE'
//       }),
//       invalidatesTags: ['Contact']
//     }),
//     updateContact: builder.mutation({
//       query: contact => ({
//         url: `/contacts/${contact.id}`,
//         method: 'PUT',
//         body: contact
//       }),
//       invalidatesTags: ['Contact']
//     })
//   })), 
// });

// export const { useGetAllContactsQuery, useAddContactMutation, useDeleteContactMutation, useUpdateContactMutation } = contactsApi;
