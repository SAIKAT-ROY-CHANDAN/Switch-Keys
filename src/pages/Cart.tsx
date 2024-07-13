import CartCard from "@/components/CartCard"
import { Button } from "@/components/ui/button"
import { useGetCartItemsQuery } from "@/redux/api/baseApi"
import { useAppSelector } from "@/redux/hooks"
import { TAddCart } from "@/types"
import { Link } from "react-router-dom"

const Cart = () => {
    const { data } = useGetCartItemsQuery({})
    const totalPrice = useAppSelector((state) => state.totalPrice.totalPrice);
    const subTotal = useAppSelector((state) => state.totalPrice.totalQuantity);

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
                    <h1 className="font-medium text-2xl border-b p-4  font-mono">Total</h1>
                    <div className="flex flex-col gap-y-6 w-10/12 mt-8 pb-5 mx-auto">
                        <p className="font-semibold text-lg">Products: {subTotal}</p>
                        <p className="font-bold text-xl">Total Price: ${totalPrice.toFixed(2)}</p>

                        <Button variant='default'>
                            <Link to={`/checkout`}  className="w-2/5 flex gap-x-2 items-center justify-center">
                                <p>
                                    Checkout
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                                </svg>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart