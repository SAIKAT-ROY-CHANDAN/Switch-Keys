import demoCart from "../assets/images/keyboard-1.jpg"


const Cart = () => {
    return (
        <div className=" bg-[#f0f0f0] h-screen">
            <div className="flex flex-col-reverse md:flex-row xl:mx-0 mx-5 xl:justify-center translate-y-32 gap-4">
                <div className="bg-white w-full xl:w-[700px] border rounded-lg">
                    <h1 className="font-medium text-2xl border-b p-4 font-mono">Shopping Cart</h1>
                    <div className="py-4 flex justify-between items-center gap-x-6 xl:w-10/12 mx-auto px-2">
                        <div className="bg-gray-200/50 border rounded-xl w-20 p-1 xl:py-2 flex items-center justify-center ml-3">
                            <img
                                className="size-14 rounded-md"
                                src={demoCart} alt="" />
                        </div>
                        <div>
                            <h1 className="text-lg font-medium">Mechanical Keyboard</h1>
                            <h2 className="text-green-500">In Stock</h2>
                            <h2>Quantity: 122</h2>
                        </div>
                        <div className="flex flex-col xl:flex-row xl:gap-x-4 gap-y-4 items-center" >
                            <div className="flex gap-4 items-center justify-center p-1 border rounded-md">
                                <button>+</button>
                                <p>1</p>
                                <button>-</button>
                            </div>

                            <div className="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-def">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="bg-white border w-full xl:w-[500px] rounded-lg">
                    <h1 className="font-medium text-2xl border-b p-4 font-mono">Product Price</h1>
                </div>
            </div>
        </div>
    )
}

export default Cart