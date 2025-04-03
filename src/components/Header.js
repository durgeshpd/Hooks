import { LOGO_URL  } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                    {/* Display imported logo */}
                </ul>
            </div>
        </div>
    );
}

export default Header;