import React from 'react'

function Footer() {
    return (
        <div className="footerContent">
            <h2 className="footer-heading">
                <img className="footer-heading-image profile" src="" alt="This is my profile"/>
            </h2>

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