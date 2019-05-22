import React from 'react';
import {Link} from 'react-router-dom';

const PublicationLinkItem = (
    linkItem
) =>{
    return(
        <Link to = "/1">
            <button className="button">Читать подробнее</button>
        </Link>
    )
}

export default PublicationLinkItem;