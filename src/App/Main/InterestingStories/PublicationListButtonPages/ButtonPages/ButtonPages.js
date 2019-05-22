import React from 'react';
import ButtonPage from './ButtonPage';
// import publication from '../Publication/publication';

// var pages = [];
// var i=0;
// var a=0;
// for (i=1;i<=(publication.length/5);i++){
//     a+=5;
//     if(publication.length >= a){
//         pages.push({page: i});
//     }
// }


const ButtonPages = ({
    pages,
    onButtonClick,
    currentPage,
}) =>{

    return(
        <div className="button_pages">
            {
                pages.map((
                    page
                )=>{
                    return(
                        <ButtonPage
                            key={page}
                            onButtonClick = {onButtonClick}
                            page={page}
                            currentPage={currentPage}
                         />				
                    )
                })
            }
        </div>
    )
}

export default ButtonPages;