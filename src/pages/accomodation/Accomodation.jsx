import './accomodation.scss'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import datas from '../../../public/logements.json';
import Header from "../../components/header/Header";
import Slider from "../../components/carousel/Carousel"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import NotFound from '../notFound/NotFound';
import Tag from '../../components/tag/Tag';
import Rating from '../../components/rating/Rating';

/**
 * Renders the Accomodation component.
 * @returns {JSX.Element} The Accomodation component.
 */
export default function Accomodation() {

	/**
	 * State variable to store the image slider data.
	 */
	const [imageSlider, setImageSlider] = useState([]);

	/**
	 * Retrieves the id parameter from the URL.
	 */
	const { id } = useParams();

	try {
		/**
		 * Fetches the logements.json file.
		 */
		const response = fetch('../../../public/logements.json');

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		/**
		 * Parses the response data.
		 */
		const datas = response.json();

	} catch (error) {
		console.error('Error fetching data:', error);
	}

	/**
	 * Finds the current accomodation data based on the id.
	 */
	const dataCurrentAccomodation = datas.find(data => data.id === id);

	useEffect(() => {
		if (dataCurrentAccomodation) {
			setImageSlider(dataCurrentAccomodation.pictures);
		}
	}, [id, dataCurrentAccomodation]);

	if (!dataCurrentAccomodation) {
		return <NotFound />;
	}

	/**
	 * Extracts the name, rating, description, and equipments from the current accomodation data.
	 */
	const name = dataCurrentAccomodation.host.name.split(' ');
	const rating = dataCurrentAccomodation.rating;
	const description = dataCurrentAccomodation.description;
	const equipments = dataCurrentAccomodation.equipments;

	return (
		<div className='accomodation_wrapper'>
			<Header />
			<Slider imageSlider={imageSlider} />
			<main className="accomodation">
				<div className="accomodation_content">
					<div className="accomodation_content_infos">
						<h1>{dataCurrentAccomodation.title}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div>
							{dataCurrentAccomodation.tags.map((tag, index) =>
								<Tag key={index} tag={tag} />
							)}
						</div>
					</div>
					<div className="accomodation_content_host">
						<div>
							<div className='accomodation_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={dataCurrentAccomodation.host.picture} alt="host of this accomodation" />
						</div>

						<div className="accomodation_content_host_stars">
							<Rating rating={rating} />
						</div>
					</div>
				</div>
				<div className="accomodation_collapse">
					<div className="accomodation_collapse_item">
						<Collapse title={'Description'} content={description} />
					</div>
					<div className="accomodation_collapse_item">
						<Collapse title={'Équipements'} content={equipments} />
					</div>
				</div>
			</main>
			<Footer />
		</div>
	)
}