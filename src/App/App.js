import React from 'react';

import './../common/style/reset.css'
import './../common/style/style.css'

import Header from './Header/Header';
// import Main from './Main/Main';
import Footer from './Footer/Footer';
import MainInterestingStories from './Main/InterestingStories/MainInterestingStories'


const App = () =>{
    return(
        <div>
            <Header/>
            <MainInterestingStories/>
           <Footer/>
        </div>
    )
}

export default App;
