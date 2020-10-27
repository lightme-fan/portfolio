import React from "react";
import './../style.css';
import fan from './../images/fan.JPG'

function Header() {
    return (
        <header className="heading">
            <h1 className='text-heading'>My web pages</h1>
            <div className="heading-profile">
                <img className="heading-image profile" src={fan} alt="This is my profile"/>
            </div>
        </header>
    )
}

export default Header