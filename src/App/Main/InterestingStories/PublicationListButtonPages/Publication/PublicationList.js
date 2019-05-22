import React from 'react';

import PublicationName from './PublicationName';
import PublicationImage from './PublicationImage';
import BlockDateNameComment from './BlockDateNameComment';
import BlockLinkMenu from './BlockLinkMenu/BlockLinkMenu';
import BlockLinkYearFilm from './BlockLinkYearFilm/BlockLinkYearFilm';
import PublicationText from './PublicationText';
import PublicationLinkItem from './PublicationLinkItem';



const PublicationList = ({
    id,
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
}) =>{
    return(
        <div className="publication" key = {id}>
            <PublicationName
                id={id}
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
}

export default PublicationList;