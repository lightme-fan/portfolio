import React from "react";
import './../style.css';

function Header() {
    return (
        <header className="heading">
            <h1 className='text-heading'>My web pages</h1>
            <div className="footer-heading">
                <img className="footer-heading-image profile" src="" alt="This is my profile"/>
            </div>
        </header>
    )
}

export default Header