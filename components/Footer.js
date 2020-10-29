import React from 'react'
import './../style.css'

function Footer(props) {
    return (
        <>
            <div className="footerContent">
                <form className="footer-comment" onSubmit={props.onSubmit}>
                    <label>Write your comment or suggestion!</label><br />
                    <input type='text' id='comment'value={props.value} className="footer-comment-input" name='comment' onChange={props.onChange} /><br />
                    <button type="Submit" className="button footer-comment-button">Comment</button><br/>
                    
                </form>

                <div className="footer-subscribe">
                    <button type="button" className="button footer-subscribe-button">Subscribe</button>
                </div>
            </div>

            <div>
                {props.text}
            </div>
        </>
    )
}

export default Footer