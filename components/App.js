import React from 'react'
import posts from './post'
import Header from './Header'
import Footer from './Footer'

function App() {
    const postListStyle = {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0
    }

    const postListLink = {
        textDecoration: 'none',
        fontSize: '2rem',
        width: '30%',
        height: '40%',
        backgroundColor: '#ffffff',
        // paddingTop: '4rem',
        // paddingBottom: '4rem',
        // paddingLeft: '1rem',
        // paddingRight: '1rem',
    }

    const postList = posts.map(post =>         
        <li key={post.id} id={post.id}>
            <a style={postListLink} href={post.url}>
                <span>{post.title}</span>
            </a>  
        </li>        
    )

    return (
        <div>
            <Header />
            <main>
                <nav>
                    <ul style={postListStyle}>{postList}</ul>
                </nav>
            </main>
            <Footer />
        </div>
    )
}

export default App