import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo"><h2>Shop<span>Fit</span></h2></div>

            <div className="navbar__link">
                <Link to="/cart">
                    <i className="fas fa-shopping-cart" />
                    Cart
                    <span className="cart__badge">0</span>
                </Link>
                <Link to="/">
                    Shop
                </Link>
            </div>

            <div className="hamburger__menu">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
