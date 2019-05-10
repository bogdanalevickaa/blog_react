import React from 'react';

import Menu from '../Menu/Menu';
import PublicationList from './Publication/PublicationList';
import BlockSocialNetworks from './BlockSocialNetworks/BlockSocialNetworks';
import BlockInteresting from './BlockInteresting/BlockInteresting';
import ButtonPages from './ButtonPages/ButtonPages';

import './interestingStories.css'

const MainInterestingStories = () =>{
    return(
        <main>
            <div className="main row">
                <div className="conteiner_main row">
                    <div className="col row">
                        <div className="section">
                            <h2>Интересные истории</h2>
                        </div>
                        <div className="col-md-8 row">
                            <PublicationList/>
                            <ButtonPages/>    
                        </div>
                        <div className="col-md-4">
                            <div className="block_interesting">
                                <div className="block_interesting_name">Интерестно всем</div>
                                <BlockInteresting/>
                            </div>
                            <Menu/>
                            <BlockSocialNetworks/>   
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default MainInterestingStories;