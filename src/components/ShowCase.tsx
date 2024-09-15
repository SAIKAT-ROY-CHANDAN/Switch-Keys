import { BentoGrid, BentoGridItem } from "./ui/BentoGrid"

const ShowCase = () => {
    const Skeleton = () => (
        <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
    );

    const items = [
        {
            title: "The Dawn of Innovation",
            description: "Explore the birth of groundbreaking ideas and inventions.",
            header: <Skeleton />,
            className: "md:col-span-2",
            // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
            icon: "https://images.unsplash.com/photo-1632365086223-cb3d38789f2b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Digital Revolution",
            description: "Dive into the transformative power of technology.",
            header: <Skeleton />,
            className: "md:col-span-1",
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
            icon: "https://images.unsplash.com/photo-1635896383799-06e1e0accda0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Art of Design",
            description: "Discover the beauty of thoughtful and functional design.",
            header: <Skeleton />,
            className: "md:col-span-1",
            // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
            icon: "https://images.unsplash.com/photo-1636451096144-a4304c34c169?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            title: "The Power of Communication",
            description:
                "Understand the impact of effective communication in our lives.",
            header: <Skeleton />,
            className: "md:col-span-2",
            // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
            icon: "https://images.unsplash.com/photo-1677346414290-d337cbc682a6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ];


    return (
        <BentoGrid className="max-w-5xl my-20 mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    )
}

export default ShowCase