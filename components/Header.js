import React from "react";
import './../style.css';
import fan from './../images/fan.JPG'

function Header() {
    return (
        <header className="heading">
            <label for="input_checkbox" class="label_menu">
                <span class="open_menu">Open menu</span>
            </label>
            <h1 className='text-heading'>My web pages</h1>
            <ul className='list-menu'>
                <li className='list-menu--item'><a a className='list-menu--link' href='/'>Blog</a></li>
                <li className='list-menu--item'><a className='list-menu--link' href='/'>Portfolio</a></li>
                <li className='list-menu--item'><a className='list-menu--link' href='/'>About</a></li>
            </ul>
            <div className="heading-profile">
                <img className="heading-image profile" src={fan} alt="This is my profile"/>
            </div>
        </header>
    )
}

export default Header