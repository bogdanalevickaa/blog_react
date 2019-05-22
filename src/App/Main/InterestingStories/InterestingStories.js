import React, {Component} from 'react';

import Menu from '../Menu/Menu';
import BlockSocialNetworks from './BlockSocialNetworks/BlockSocialNetworks';
import BlockInteresting from './BlockInteresting/BlockInteresting';

import './interestingStories.css'
import PublicationListButtonPages from './PublicationListButtonPages/PublicationListButtonPages';
import publication from './PublicationListButtonPages/Publication/publication';


class InterestingStories extends Component{ 
    render(){
    const{
        PublicationBody = PublicationListButtonPages
    } = this.props
        return(
            <div className="main row">
                <div className="conteiner_main row">
                    <div className="col row">
                        <PublicationBody key={publication.id}
                            id={publication.id}
                            publicationName={publication.publicationName}
                            limitationAge={publication.limitationAge}
                            image={publication.image}
                            text={publication.text}
                            linkItem={publication.linkItem}
                            date={publication.date}
                            autorName={publication.autorName}
                            linkItemComment={publication.linkItemComment}
                            linkMenu={publication.linkMenu}
                            linkYearFilm={publication.linkYearFilm}
                            publication={publication}
                        />
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
        )
    }
}
export default InterestingStories;