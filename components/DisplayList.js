import React from 'react'
import posts from './post'

function DisplayList(props) {
    return (
        <>
            {posts.map(post => 
                <li className='list-post'key={post.id} id={post.id}>
                    <a className='post-list-link' href={post.url}>
                        <img src={post.screenshot} alt={post.title} />
                    </a>  
                </li>
            )}
        </>
    )
}

export default DisplayList

