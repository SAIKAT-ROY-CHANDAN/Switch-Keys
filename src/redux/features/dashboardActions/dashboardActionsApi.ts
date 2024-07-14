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
  }),
});

export const { useUpdateProductMutation } = dashboardActionsApi