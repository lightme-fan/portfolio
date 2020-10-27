import React from 'react'
import './../style.css'

function Footer() {
    return (
        <div className="footerContent">
            <div className="footer-comment">
                <label>Write your comment or suggestion!</label><br />
                <textarea id='comment' className="footer-comment-textarea row=5" /><br />
                <button type="button" className="button footer-comment-button">Comment</button>
            </div>

            <div className="footer-subscribe">
                <button type="button" className="button footer-subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default Footer