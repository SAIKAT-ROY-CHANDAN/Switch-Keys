import { CardBody, CardContainer, CardItem } from "./ui/3d-card"


const NewArrivalCard = () => {
    return (
        <CardContainer className="inter-var cursor-pointer">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[80vw] sm:w-[25rem]
             lg:w-[22rem] xl:w-[24rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full">
                    <img
                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                    Make things float in air
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Hover over this card to unleash the power of CSS perspective
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
                        Details
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default NewArrivalCard