import { TProducts } from "@/types";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card"
import { Link } from "react-router-dom";

interface NewArrivalCardProps {
    item: TProducts;
}

const NewArrivalCard = ({ item }: NewArrivalCardProps) => {
    console.log(item);
    return (
        <CardContainer className="inter-var cursor-pointer">
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
                <div className="flex justify-between items-center mt-10">
                    <CardItem
                        translateZ={20}
                        className="rounded-xl text-xs font-normal dark:text-white"
                    >
                        ⭐⭐⭐⭐⭐
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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