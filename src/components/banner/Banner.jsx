import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Renders a banner component.
 *
 * @returns {JSX.Element} The rendered banner component.
 */
export default function Banner() {
	const [aboutPage, setAboutPage] = useState(false);
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/about') {
			setAboutPage(true)
		};
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
		</section>
	)
}
