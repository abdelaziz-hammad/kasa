import "./home.scss";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../components/gallery/Gallery";
import Accomodation from "../accomodation/Accomodation";
import ListingDetails from "../../service/ListingDetails";
export default function Home() {
	return (
		<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>
	);
}


