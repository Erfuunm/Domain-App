import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const domainApi = createApi({
  reducerPath: 'domainApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://6797aa2bc2c861de0c6d964c.mockapi.io/domain',
  }),
  tagTypes: ['Domains'],
  endpoints: (builder) => ({
    getDomains: builder.query({
      query: () => '/',
      providesTags: ['Domains'],
    }),
    addDomain: builder.mutation({
      query: (domain) => ({
        url: '/',
        method: 'POST',
        body: domain,
      }),
      invalidatesTags: ['Domains'],
    }),
    updateDomain: builder.mutation({
      query: ({ id, ...domain }) => ({
        url: `/${id}`,
        method: 'PUT',
        body: domain,
      }),
      invalidatesTags: ['Domains'],
    }),
    deleteDomain: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Domains'],
    }),
  }),
})

export const { 
  useGetDomainsQuery,
  useAddDomainMutation,
  useUpdateDomainMutation,
  useDeleteDomainMutation 
} = domainApi