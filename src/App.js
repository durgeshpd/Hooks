import React from "react";
import { createRoot } from 'react-dom/client';
import './index.css';  // Your CSS file

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="/logo.png" alt="Logo" />  {/* This will load the logo from the public folder */}
            </div>
            <div className="nav-items">
                <ul>
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    );
}

// Rendering the App in the root div
const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
