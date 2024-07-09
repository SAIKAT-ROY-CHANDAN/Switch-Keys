import { cn } from "../../lib/utils"
import testHeroImage from '../../assets/images/test-hero.jpg';

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    // header,
    icon,
    // imgClassName
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    imgClassName?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-2 border-transparent justify-between flex flex-col space-y-4",
                className
            )}
        >
            <div className="h-full">
                <div className="bg-gradient-to-r from-slate-900 to-slate-700 
                group-hover/bento:bg-gradient-to-r from-slate-500 to-slate-800 flex items-center justify-center">
                    <img
                        className="group-hover/bento:rotate-1 group-hover/bento:scale-95 duration-200 h-[23vh] w-fit object-contain"
                        src={testHeroImage} alt="item" />
                </div>
                {/* {header} */}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};
