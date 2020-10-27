import React from 'react'
import posts from './post'
import Header from './Header'
import Footer from './Footer'
import './../style.css'

function App() {
    const postList = posts.map(post =>         
        <li className='list-post' key={post.id} id={post.id}>
            <a className='post-list-link' href={post.url}>
                {/* <span>{post.title}</span> */}
                <img src={post.screenshot} alt={post.title} />
            </a>  
        </li>        
    )

    return (
        <div>
            <Header />
            <main>
                <nav>
                    <ul className='post-list'>{postList}</ul>
                </nav>
            </main>
            <Footer />
        </div>
    )
}

export default App