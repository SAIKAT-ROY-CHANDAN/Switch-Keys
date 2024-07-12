import { useGetProductsQuery } from "@/redux/api/baseApi"
import NewArrivalCard from "./NewArrivalCard"
import { TProducts } from "@/types";
import { Link } from "react-router-dom";


const NewArrival = () => {
  const { data } = useGetProductsQuery({})

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl font-sans font-bold">New arrival</h1>
        <a href="#shop" className="text-def/80 font-medium">Shop Now</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-1 gap-x-2">
        {data?.data.slice(0, 8).map((item: TProducts) => (
          <NewArrivalCard key={item._id} item={item} />
        ))}

      </div>
      <div className="flex justify-center mt-5">
        <button className="p-[2px] relative">
          <div className="absolute inset-0 bg-black/80 rounded-lg" />
          <div className="px-6 py-2 bg-white rounded-[6px] relative group transition duration-200 text-black/80 hover:bg-transparent hover:text-white font-medium">
            <Link to='/products'>See more</Link>
          </div>
        </button>
      </div>
    </div>
  )
}

export default NewArrival