import Delivery from "@/components/Delivery"
import Total from "@/components/Total"

const Checkout = () => {
  return (
    <div className="bg-[#F0F0F0] flex flex-col-reverse lg:flex-row lg:mx-4">
      <div className="lg:w-[55%] h-auto pt-28 bg-white">
        <Delivery />
      </div>
      <div className="lg:w-[45%] hidden lg:block h-auto">
        <Total />
      </div>
    </div>
  )
}

export default Checkout