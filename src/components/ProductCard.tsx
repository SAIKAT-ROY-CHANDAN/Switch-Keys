import { TProducts } from "@/types";

interface NewArrivalCardProps {
    item: TProducts;
}

const ProductCard = ({ item }: NewArrivalCardProps) => {
    return (
        <div className="group">
            <div className="bg-[#545455] border-b-transparent rounded-lg rounded-b-none border h-[210px] w-[288px]">
                <img className="object-cover h-full object-center rounded-t-lg group-hover:scale-[101%] duration-200 " src={item?.image} alt="" />
            </div>
            <div className="px-4 py-3 shadow-md w-[286px] bg-[#F9FAFB] group-hover:bg-[#f2f2f2] group-hover:scale-[101%] rounded-t-none rounded-lg">
                <div className="flex gap-x-7 justify-between">
                    <h2 className="uppercase font-semibold text-md">{item?.title}</h2>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>
                    </button>
                </div>
                <div className="flex justify-between flex-row-reverse">
                    <img className="size-5" src={item?.brandImg} alt="" />
                    <h4 className="text-xs">{item?.quantity}</h4>
                 </div>
                <div className="flex justify-between">
                    <h4 className="text-xs">{item?.price} $</h4>
                    <h6 className="text-xs">{item?.rating}</h6>
                </div>
                <p className="line-clamp-2 mt-2 text-gray-600/95 text-xs">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, dolor id veritatis alias quis neque!</p>
            </div>
        </div>
    )
}

export default ProductCard