import { TProducts } from "@/types";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { Link } from "react-router-dom";
import StarRating from "./shared/StarRating";

interface NewArrivalCardProps {
    item: TProducts;
}

const NewArrivalCard = ({ item }: NewArrivalCardProps) => {
    console.log(item);
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-[25rem]
             lg:w-[22rem] xl:w-[24rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                    <img
                        src={item?.image}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    translateZ="60"
                    className="text-xl mt-5 font-bold text-neutral-600 dark:text-white"
                >
                    {item?.title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {item?.desc}
                </CardItem>
                <div className="flex items-center justify-between">
                    <CardItem
                        translateZ="60"
                        className="text-sm mt-2 text-neutral-600 dark:text-white"
                    >
                        <img src={item?.brandImg} className="size-6" alt="" />
                    </CardItem>
                    <CardItem
                        translateZ="60"
                        className="text-xs font-medium mt-2 text-neutral-600 dark:text-white uppercase"
                    >
                        {item?.brand}
                    </CardItem>
                </div>
                <CardItem
                    translateZ="60"
                    className="text-xs font-medium mt-2 text-neutral-600 dark:text-white"
                >$ {item?.price}</CardItem>
                <CardItem
                    translateZ="60"
                    className="text-xs font-medium mt-2 text-neutral-600 dark:text-white"
                >
                    <h6 className={`${item?.inStock ? 'text-green-600' : 'text-red-600'} font-medium text-md inline-flex gap-x-2 items-center`}>{item?.inStock ? "In Stock" : "Out of Stock"}
                        {item?.inStock && <span className="font-medium text-lg text-black text-xs">/ {item?.quantity}</span>}
                    </h6>
                </CardItem>
                <div className="flex justify-between items-center mt-5">
                    <CardItem
                        translateZ={20}
                        className="rounded-xl text-xs font-normal dark:text-white"
                    >
                        <StarRating rating={item?.rating} />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black hover:bg-black/70 dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        <Link to={`/products/${item?._id}`}>
                            Details
                        </Link>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default NewArrivalCard