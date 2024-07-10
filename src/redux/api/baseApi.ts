import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: '/product'
            })
        }),
        getSingleProducts: builder.query({
            query: (id) => ({
                url: `/product/${id}`
            })
        })
    })
})

export const { useGetProductsQuery, useGetSingleProductsQuery } = baseApi