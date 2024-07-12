import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['products'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ sort, search }) => {
                console.log({sort, search});
                return {
                    url: '/product',
                    params: { sort, search }
                }
            },
            providesTags: ['products']
        }),
        getSingleProducts: builder.query({
            query: (id) => {
                return {
                    url: `/product/${id}`
                }
            }, providesTags: ['products']
        }),
        postProduct: builder.mutation({
            query: (data) => ({
                url: '/cart',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['products']
        })
    })
})

export const { useGetProductsQuery, useGetSingleProductsQuery, usePostProductMutation } = baseApi