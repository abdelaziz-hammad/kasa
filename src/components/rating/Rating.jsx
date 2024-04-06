import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';

/**
 * Renders a star rating component.
 *
 * @component
 * @param {number} rating - The rating value.
 * @returns {JSX.Element} The star rating component.
 */
export default function Rating({ rating }) {

    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                    <img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
                )
            })}
        </div>
    )
}
