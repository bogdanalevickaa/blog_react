import React from 'react';

import interesting from './interesting';
import BlockInterestingItem from './BlockInterestingItem';


interesting.sort( function (a, b ) { 
    return(a.key > b.key ? -1 : 1);
} );

const filtered = interesting.filter(function(row, index) {
    return index < 3;
});
const BlockInteresting = () =>{
    return(
        <div>
            {
                filtered.map(({
                    key,
                    image,
                    title,
                })=>{
                    return(
                        <BlockInterestingItem
                            key = {key}
                            image = {image}
                            title = {title}
                        />
                    )
                })
            }
        </div>
    )
}

export default BlockInteresting;