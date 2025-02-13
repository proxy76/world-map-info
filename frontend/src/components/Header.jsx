import React, { useState, useEffect, useRef } from 'react';
import '../styles/main.scss';

export default function Header() {
    const [showPopup, setShowPopup] = useState(false);
    const popupRef = useRef(null);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                        <div className="popup" ref={popupRef}>
                            <p>Login</p>
                            <p>Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}