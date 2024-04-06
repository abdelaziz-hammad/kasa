import "./home.scss";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Gallery from "../../service/Gallery";
/**
 * Renders the Home page component.
 * @returns {JSX.Element} The rendered Home component.
 */
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


