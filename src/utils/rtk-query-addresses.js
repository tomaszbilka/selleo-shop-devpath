import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const usersAddressesApi = createApi({
  reducerPath: 'addresses',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3004/',
  }),
  tagTypes: ['Address'],
  endpoints: (builder) => ({
    getAddresses: builder.query({
      query: () => `/addresses`,
      providesTags: ['Address'],
    }),
    addAddress: builder.mutation({
      query: ({ id, address }) => ({
        url: `/addresses`,
        method: 'POST',
        body: { id, address },
      }),
      invalidatesTags: ['Address'],
    }),
    updateAddress: builder.mutation({
      query: ({ id, address }) => ({
        url: `/addresses/${id}`,
        method: 'PUT',
        body: { id, address },
      }),
      invalidatesTags: ['Address'],
    }),
    deleteAddress: builder.mutation({
      query: (id) => ({
        url: `/addresses/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Address'],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  useAddAddressMutation,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
} = usersAddressesApi;
