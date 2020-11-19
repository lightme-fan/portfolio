import React from "react";
import './../style.css';
import fan from './../images/fan.JPG'

function Header() {
    return (
        <header className="heading">
            <input type='checkbox' id='inputCheckbox' className='checkbox'/>
            <label htmlFor="inputCheckbox" className="label_menu">
                Menu
            </label>
            <h1 className='text-heading'>Portfolio</h1>
            <ul className='list-menu'>
                <li className='list-menu--item'><a className='list-menu--link' href='/about'>About</a></li>
                <li className='list-menu--item'>
                    <a className='list-menu--link' href='https://lightme-fan.github.io/blog/about_me/about-me.html'>About</a>
                </li>
                <li className='list-menu--item'>
                    <a className='list-menu--link' href='https://lightme-fan.github.io/blog/'>Blog</a>
                </li>
                <li className='list-menu--item'><a className='list-menu--link' href='/portfolio'>Portfolio</a></li>
            </ul>
        </header>
    )
}

export default Header