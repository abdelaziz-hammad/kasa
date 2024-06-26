import './navbar.scss'
import { Link } from "react-router-dom";

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
export default function Navbar() {
    const currentRoute = window.location.pathname;
    return (
        <nav className='nav'>
            <ul className='nav_list'>
                <li className={currentRoute === '/Kasa' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link to='/'>
                        Accueil
                    </Link>
                </li>
                <li className={currentRoute === '/about' ? 'nav_list_item_active' : 'nav_list_item'}>
                    <Link to='../../pages/about/About'>
                        A propos
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
