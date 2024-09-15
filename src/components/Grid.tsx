import { motion } from "framer-motion";
import LayoutGrid from "./KeyBoardLayout";

const Grid = () => {
    const textStyle = {
        background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.2), rgba(26, 26, 26, 0) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
    };

    return (
        <div className=" bg-[#F0F0F0] py-20">
            <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ amount: 'some' }} className="text-center">
                <span className="2xl:text-[12rem] 
                text-[16vw] font-bold" style={textStyle}>FREEBIRD</span>
            </motion.div>
            <div className="flex flex-col gap-2 justify-center items-center">
                <h1 className="text-black text-xl sm:text-3xl font-bold">Premium Mechanical Keyboards</h1>
                <p className="text-center text-xs xl:text-lg sm:w-[80%] xl:w-[60%] 2xl:w-[55%] text-[#6e6e6e] font-sans">Our Freebird Collection brings you high quality mechanical keyboards in 60%, 75% and TKL layouts. The Freebird keyboards boasts a premium aluminum case, stylish designs and are hot swappable. Available in various color options.</p>
            </div>
            <LayoutGrid />
        </div >
    )
}

export default Grid