import { baseApi } from "@/redux/api/baseApi";

const dashboardActionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation({
      query: ({ id, data }) => {
        console.log(data, "data");
        return {
          url: `/product/${id}`,
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['products'],
    }),

    postNewProducts: builder.mutation({
      query: ({data}) => {
        console.log(data);
        return {
          url: '/product',
          method: "POST",
          body: data,
        }
      },
      invalidatesTags: ['products'],
    }),

    
    deleteNewProducts: builder.mutation({
      query: ({id}) => {
        console.log({id});
        return {
          url: `/product/${id}`,
          method: "DELETE",
        }
      },
      invalidatesTags: ['products'],
    })
  }),
});

export const { useUpdateProductMutation, usePostNewProductsMutation, useDeleteNewProductsMutation } = dashboardActionsApi