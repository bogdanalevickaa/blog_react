import React from 'react';

import PublicationName from './PublicationName';
import PublicationImage from './PublicationImage';
import BlockDateNameComment from './BlockDateNameComment';
import BlockLinkMenu from './BlockLinkMenu/BlockLinkMenu';
import BlockLinkYearFilm from './BlockLinkYearFilm/BlockLinkYearFilm';
import PublicationText from './PublicationText';
import PublicationLinkItem from './PublicationLinkItem';
import publication from './publication';


publication.sort( function (a, b ) { 
    return(a.key > b.key ? -1 : 1);
} );

const filtered = publication.filter(function(row, index) {
    return index < 5;
    
});

const PublicationList = () =>{
    return(
        <div>
            {
                filtered.map(({
                    key,
                    publicationName,
                    limitationAge,
                    image,
                    text,
                    linkItem,
                    date,
                    autorName,
                    linkItemComment,
                    linkMenu,
                    linkYearFilm
                })=>{
                    return(
                        <div className="publication" key = {key}>
                            <PublicationName
                                publicationName = {publicationName}
                            />
                            <PublicationImage
                                limitationAge = {limitationAge}
                                image = {image}
                            />
                            <PublicationText
                                text = {text}
                            />
                            <PublicationLinkItem
                                linkItem = {linkItem}
                            />
                            <BlockDateNameComment
                                date = {date}
                                autorName = {autorName}
                                linkItemComment = {linkItemComment}
                            />
                            <BlockLinkMenu
                                linkMenu = {linkMenu}
                            />
                            <BlockLinkYearFilm
                                linkYearFilm = {linkYearFilm}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PublicationList;