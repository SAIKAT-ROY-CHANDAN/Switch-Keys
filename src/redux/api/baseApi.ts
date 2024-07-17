import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://switch-keys-as-server-4.vercel.app/api/" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ['products', 'carts'],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({ sort, search, minPrice, maxPrice, page, limit }) => {
                return {
                    url: '/product',
                    params: { sort, search, minPrice, maxPrice, page, limit }
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
            query: (data) => {
                return {
                    url: '/cart',
                    method: "POST",
                    body: data,
                }
            },
            invalidatesTags: ['products', 'carts']
        }),
        getCartItems: builder.query({
            query: () => {
                return {
                    url: '/cart',
                    method: "GET"
                }
            },
            providesTags: ['carts']
        }),
        deleteCartItem: builder.mutation({
            query: (id) => ({
                url: `/cart/delete/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['carts']
        }),

        postOrder: builder.mutation({
            query: (data) => {
                console.log(data);
                return {
                    url: '/order/delivery',
                    method: "POST",
                    body: data,
                }
            },
        })
    })
})

export const {
    useGetProductsQuery,
    useGetSingleProductsQuery,
    usePostProductMutation,
    useGetCartItemsQuery,
    useDeleteCartItemMutation,
    usePostOrderMutation
} = baseApi