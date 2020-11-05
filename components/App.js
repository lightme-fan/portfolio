import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import DisplayList from './DisplayList'
// import './../style.css'

function App() {
    const [comment, setComment ] = useState('')

    function handleChange(e) {
        console.log(e.target.value);
        setComment(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset()
    }

    return (
        <article>
            <Header />
            <main>
                <nav>
                    <ul className='post-list'>
                        <DisplayList />      
                    </ul>
                </nav>
            </main>
            <Footer 
                // value={comment}
                onSubmit={handleSubmit}
                onChange={handleChange}
                text={comment &&
                    <>
                        <p>{comment}</p>
                        <div>
                            <button>👍</button>
                            <button>👎</button>
                        </div>
                    </>
                }
            />
        </article>
    )
}

export default App