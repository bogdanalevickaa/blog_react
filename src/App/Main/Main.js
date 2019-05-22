import React from 'react';
import {Route} from 'react-router-dom'
import HomePage from './HomePage';
import InterestingStories from './InterestingStories/InterestingStories';
import PublicationPage from './InterestingStories/PublicationPage';


const Main = () =>{
    return(
        <main>
            <Route exact path='/' component = {HomePage}/>
            <Route exact path = '/interesting_stories' component = {InterestingStories}/>
            <Route exact path='/1' render={()=>{
                return <InterestingStories
                    PublicationBody={PublicationPage}
                />
            }}></Route>
        </main>
    )
}
export default Main;