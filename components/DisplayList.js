import React from 'react'

function DisplayList(props) {
    return (         
        <li className='list-post'id={props.id}>
            <a className='post-list-link' href={props.url}>
                <img src={props.screenshot} alt={props.title} />
            </a>  
        </li>        
    )
}

export default DisplayList

