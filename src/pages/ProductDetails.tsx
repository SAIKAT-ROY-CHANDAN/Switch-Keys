/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { useGetSingleProductsQuery, usePostProductMutation } from "@/redux/api/baseApi"
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import StarRating from "@/components/shared/StarRating";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetails = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleProductsQuery(id);
    const { image, title, price, quantity, rating, desc, brand, brandImg, _id, inStock } = data?.data || {};
    const count = useAppSelector((state) => state.quantity.counters || 0);
    const [postProduct] = usePostProductMutation();

    const handleAddToCart = async () => {
        try {
            if (quantity < count) {
                throw new Error('Quantity is insufficient')
            }

            const productData = {
                productId: _id,
                title,
                image,
                brand,
                brandImg,
                quantity,
                price,
                rating,
                desc,
                orderCount: count,
            }

            const res = await postProduct(productData).unwrap();
            if (res?.success) {
                toast.success('Product added to cart successfully')
            }
        } catch (error: any) {
            toast.error(error?.message || 'Failed to add product to cart')
        }
    }

    if (isLoading) {
        return   <div className="mt-32">
        <div className="flex flex-col lg:flex-row items-center justify-between mx-4 md:mx-auto md:w-[70%] lg:w-11/12 lg:gap-x-4 xl:justify-center xl:gap-x-10 md:p-10">
            
            {/* Image skeleton */}
            <div className="mb-8 lg:mb-0 lg:size-[70%] xl:size-[40%]">
                <Skeleton className="w-full h-[400px] bg-slate-300 rounded-md" />
            </div>

            <div className="flex flex-col mx-3 pb-4 gap-y-4 md:gap-y-7 lg:gap-y-3 xl:gap-y-7">
                <Skeleton className="h-8 w-64 bg-slate-300" /> 
                <Skeleton className="h-6 w-56 bg-slate-300" />
                <Skeleton className="h-6 w-1/2 bg-slate-300" /> 
                <Skeleton className="h-5 w-1/3 bg-slate-300" /> 
                
                <Skeleton className="h-12 w-[124px] bg-slate-300 rounded-md" />

                <Skeleton className="h-6 w-1/4 bg-slate-300" />
                
                <Skeleton className="px-8 py-2 bg-slate-300 text-white text-sm rounded-md" />
            </div>
        </div>
    </div>
    }

    return (
        <div className="mt-32">
            <div className="md:mx-auto mx-4 border lg:gap-x-4 mb-10 lg:mb-0 bg-[#f0f0f0] flex flex-col lg:flex-row justify-between xl:justify-center xl:gap-x-10 md:p-10 md:w-[70%] lg:w-11/12">
                <div className="mb-8 lg:mb-0 lg:size-[70%] xl:size-[40%]">
                    <LazyLoadImage className="w-full object-cover object-center rounded-md" src={image} alt="product" effect="blur" />
                </div>
                <div className="flex flex-col mx-3 pb-4 gap-y-4 md:gap-y-7 lg:gap-y-3 xl:gap-y-7">
                    <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                    <h1 className="text-lg">{desc}</h1>
                    <h2 className="font-medium text-lg">$ {price}</h2>
                    <h6 className={`${inStock ? 'text-green-600' : 'text-red-600'} font-medium text-md inline-flex gap-x-2 items-center`}>{inStock ? "In Stock" : "Out of Stock"}
                        {inStock && <span className="font-medium text-lg text-black">/ {quantity - count}</span>}
                    </h6>

                    {/* <div className="flex items-center border-2 w-[124px] border-black justify-around py-2 rounded-md">
                        <button onClick={handleDecrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-95 hover:text-gray-800 duration-150">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                            </svg>
                        </button>
                        <p className="text-md px-4 font-medium border-2 border-y-0 border-black">{count}</p>
                        <button onClick={handleIncrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:scale-95 hover:text-gray-800 duration-150">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div> */}
                    <StarRating rating={rating} />
                    <button
                        onClick={handleAddToCart}
                        // disabled={quantity - count < 0}
                        type="submit"
                        className="px-8 py-2 bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg">
                        Add Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails