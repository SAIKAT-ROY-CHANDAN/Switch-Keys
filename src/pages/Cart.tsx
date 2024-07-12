import CartCard from "@/components/CartCard"
import { useGetCartItemsQuery } from "@/redux/api/baseApi"
import { TAddCart } from "@/types"

const Cart = () => {
    const { data } = useGetCartItemsQuery({})

    return (
        <div className=" bg-[#f0f0f0] h-screen">
            <div className="flex flex-col-reverse md:flex-row xl:mx-0 mx-5 xl:justify-center translate-y-32 gap-4">
                <div className="bg-white w-full xl:w-[700px] border rounded-lg">
                    <h1 className="font-medium text-2xl border-b p-4 font-mono">Shopping Cart</h1>
                    {
                        data?.data.map((cart: TAddCart) => (
                            <CartCard key={cart._id} cart={cart} />
                        ))
                    }
                </div>
                <div className="bg-white border w-full xl:w-[500px] rounded-lg">
                    <h1 className="font-medium text-2xl border-b p-4 font-mono">Product Price</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart