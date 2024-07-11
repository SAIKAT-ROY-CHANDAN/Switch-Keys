import { useParams } from "react-router-dom";

import { useGetSingleProductsQuery } from "@/redux/api/baseApi"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/features/quantityCounterSlice";

const ProductDetails = () => {
    const { id } = useParams();
    const { data } = useGetSingleProductsQuery(id);
    const { image, title, price, quantity, rating, desc } = data?.data || {};
    const count = useAppSelector((state) => state.quantity.value)
    const dispatch = useAppDispatch();

    

    return (
        <div className="mt-28">
            <div className="mx-20 border bg-[#f0f0f0] flex justify-center items-center gap-x-40">
                <div className="size-1/2">
                    <img className="w-full object-cover object-center rounded-md" src={image} alt="" />
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h1 className="text-4xl font-bold">{desc}</h1>
                    <h2>$ {price}</h2>
                    <div className="flex gap-4 items-center justify-center p-1 border rounded-md">
                        <button onClick={() => dispatch(decrement())}>-</button>
                        <p>{count}</p>
                        <button onClick={() => dispatch(increment())}>+</button>
                    </div>
                    <p>{quantity - count}</p>
                    <p>{rating}</p>
                    <button className="bg-black/80 px-6 py-4 rounded-lg text-white" type="submit">Add Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails