import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

type StarRatingProps = {
    rating: number;
};


const StarRating = ({ rating }: StarRatingProps) => {

    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {Array.from({ length: fullStars }, (_, index) => (
                <FaStar key={`full-${index}`} color="gold" />
            ))}
            {halfStars === 1 && <FaStarHalfAlt key="half" color="gold" />}
            {Array.from({ length: emptyStars }, (_, index) => (
                <FaRegStar key={`empty-${index}`} color="gold" />
            ))}
            <span className='font-medium text-md' style={{ marginLeft: '8px' }}>{rating?.toFixed(1)}</span>
        </div>
    )
}

export default StarRating