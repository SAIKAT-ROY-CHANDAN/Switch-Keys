import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    return (
        <div className="relative top-20 font-bold text-4xl">ProductDetails page no: {id}</div>
    )
}

export default ProductDetails