import { useGetProductsQuery } from "@/redux/api/baseApi"
import NewArrivalCard from "./NewArrivalCard"
import { TProducts } from "@/types";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const { data, isLoading } = useGetProductsQuery({})

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-4xl font-sans font-bold">New arrival</h1>
        <a href="#shop" className="text-def/80 font-medium">Shop Now</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 md:gap-x-1 gap-x-2">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => (
            <div className="w-[80%] mb-6 mx-auto mt-14">
              <NewArrivalSkeletonCard key={index} />
            </div>
          ))
          : data?.data.slice(0, 8).map((item: TProducts) => (
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

const NewArrivalSkeletonCard = () => {
  return (
    <div className="animate-pulse flex flex-col items-center p-4 mb-4 rounded-lg">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="h-6 w-3/4 bg-gray-200 rounded-md mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-200 rounded-md"></div>
    </div>
  );
};
