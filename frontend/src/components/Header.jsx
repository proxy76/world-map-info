import React, { useState } from 'react';
import './Header.css';

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="wrapper">
            <div className="header">
                <h1 className="title">World Map</h1>
                <div className="profile-container">
                    <img
                        src="path/to/profile-picture.jpg"
                        alt="Profile"
                        className="profile-picture"
                        onClick={togglePopup}
                    />
                    {showPopup && (
                        <div className="popup">
                            <p>Login</p>
                            <p>Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}