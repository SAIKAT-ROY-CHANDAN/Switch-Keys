import pay from "../assets/images/pay2.jpg"
import { FlipWords } from "./ui/flip-words";


const Total = () => {
    const words = ["responsive", "tactile", "durable", "ergonomic"];

    return (
        <div className="relative">
            <img className="h-full" src={pay} alt="" />
            <div className="h-[40rem] absolute top-12 xl:left-10 lg:left-0 2xl:left-28 flex justify-center items-center px-4">
                <div className="lg:text-4xl xl:text-5xl 2xl:text-6xl gap-y-3 font-semibold mx-auto text-white dark:text-neutral-400">
                    <p className="xl:mb-4">
                        Discover
                        <FlipWords className="text-def font-bold" words={words} />
                    </p>
                    <p>
                        keyboards with Switch
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Total