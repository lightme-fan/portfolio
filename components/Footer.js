import React from 'react'
import './../style.css'

function Footer() {
    return (
        <div className="footerContent">
            <div className="footer-comment">
                <input type="text" className="footer-comment-input" />
                <button type="button" className="footer-comment-button">Comment</button>
            </div>

            <div className="footer-subscribe">
                <button type="button" className="footer-subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Footer