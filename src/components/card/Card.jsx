import './card.scss'
import { Link } from 'react-router-dom'

/**
 * Renders a card component.
 *
 * @param {Object} props - The component props.
 * @param {string} props.id - The ID of the card.
 * @param {string} props.title - The title of the card.
 * @param {string} props.cover - The cover image URL of the card.
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({ id, title, cover }) {

	return (
		<Link to={`/accomodation/${id}`} className="gallery_card">
			<img src={cover} alt={"Kasa -" + title} />
			<h3>{title}</h3>
		</Link>
	)
}
