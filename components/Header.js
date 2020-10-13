import React from "react";

function Header() {
    const textHeading = {
        font: 'sans-serif',
        fontStyle: 'italic',
        textAlign: 'center'
    }

    return (
        <header className="heading">
            <h1 style={textHeading}>My web pages</h1>
        </header>
    )
}

export default Header