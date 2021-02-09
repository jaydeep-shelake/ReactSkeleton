import React from 'react'
import './index.css';
import Article from './Components/Article';
import UserProfile from './Components/UserProfile';
const App = () => {
    return (
        <div>
            <header>
                <h1>React Skletons</h1>
            </header>
             <div className="content">
                 <Article/>
                 <UserProfile/>   
             </div>
        </div>
    )
}

export default App
