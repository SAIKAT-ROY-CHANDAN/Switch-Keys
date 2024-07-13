import { useDeleteCartItemMutation } from "@/redux/api/baseApi";
import { decrement, increment } from "@/redux/features/quantityCounterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { TAddCart } from "@/types"
import { toast } from "sonner";

type CartCardProps = {
    cart: TAddCart;
};


const CartCard = ({ cart }: CartCardProps) => {
    const [deleteCartItem] = useDeleteCartItemMutation()
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.quantity.counters[cart._id] || 0);

    const handleDelete = async (id: string) => {
        const toastId = toast.loading('Deleting')
        console.log('Moment before disaster', id);

        try {
            const res = await deleteCartItem(id).unwrap();
            console.log(res);
            toast.success('Successfully deleted', { id: toastId })
        } catch (error) {
            console.error('Failed to delete the cart item: ', error);
            toast.error('Something went wrong', { id: toastId })
        }
    };

    const handleIncrement = () => {
        dispatch(increment({cartId: cart._id , maxQuantity:cart.quantity}))   
    }

    const handleDecrement = () => {
        dispatch(decrement(cart._id))   
    }

    return (
        <div className="py-4 flex justify-between items-center gap-x-6 xl:w-10/12 mx-auto px-2">
            <div className="bg-gray-200/50 border rounded-xl w-20 p-1 xl:py-2 flex items-center justify-center ml-3">
                <img
                    className="size-14 rounded-md"
                    src={cart?.image} alt="" />
            </div>
            <div className="flex-1">
                <h1 className="text-lg font-medium">{cart?.title}</h1>
                <h6 className={`${cart?.inStock ? 'text-green-600' : 'text-red-600'} font-medium text-md inline-flex gap-x-2 items-center`}>{cart?.inStock ? "In Stock" : "Out of Stock"}
                    {cart?.inStock && <span className="font-medium text-black text-xs">/ {cart?.quantity}</span>}
                </h6>
                <h2 className="text-xs mt-1">${cart.price}</h2>
            </div>
            <div className="flex flex-col xl:flex-row xl:gap-x-4 gap-y-4 items-center" >
                <div className="flex items-center border-2 w-[124px] border-black justify-around py-2 rounded-md">
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
                </div>

                <div className="cursor-pointer" onClick={() => handleDelete(cart?._id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-def">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default CartCard