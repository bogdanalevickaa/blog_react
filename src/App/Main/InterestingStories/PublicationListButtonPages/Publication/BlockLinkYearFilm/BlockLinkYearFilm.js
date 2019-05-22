import React from 'react';
import LinkSectionYearFilm from './LinkSectionYearFilm';

const BlockLinkYearFilm = () =>{
    return(
        <div className="publication_block">
            <LinkSectionYearFilm/>
            <div className="publication_section">
                <a href="">Фильмы 2012</a>
            </div>
            <div className="publication_section">
                <a href="">Фильмы 2013</a>
            </div>
        </div>
    )
}

export default BlockLinkYearFilm;