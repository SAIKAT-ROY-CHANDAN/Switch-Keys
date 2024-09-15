import { logos } from "../constants"

const Brands = () => {
    return (
        <div className="w-full py-12 mb-20">
            <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
                <div className="font-medium uppercase mb-4">Popular Brands</div>
                <div className="grid grid-cols-3 gap-x-12 md:grid-cols-5 lg:grid-cols-6">
                    {logos.map((logo, key) => (
                        <img
                            key={key}
                            src={logo.url}
                            className="h-14 w-36 px-2 brightness-0 hover:scale-105 duration-200 transition-transform dark:invert"
                            alt={`${logo.name}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Brands