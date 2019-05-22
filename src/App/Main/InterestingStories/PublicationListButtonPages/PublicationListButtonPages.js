import React, {Component} from 'react';

import ButtonPages from './ButtonPages/ButtonPages';
import PublicationList from './Publication/PublicationList';
import publication from './Publication/publication';

publication.sort( function (a, b ) { 
    return(a.id > b.id ? -1 : 1);
} );

class PublicationListButtonPages extends Component{
    constructor(){
        super();
        this.state = {
            pageSize:5,
            pages:[],
            currentPage:1,
        };
    }
    zzz(){
        let pagesCount = Math.ceil(publication.length/this.state.pageSize);
        for (let i=1;i<=pagesCount;i++){
            this.state.pages.push(i)
        }
    }      
    
    
    // onButtonClick () {
    //     // page = this.currentPage
    //     // pagesCount = this.pageSize
    //     if(publication.id === this.state.pages.value){
    //         return(
    //             publication
    //         )
    //     }
    // };
    render(){
        const{
        publication
    } = this.props
        return(
            <div >
                <div className="section">
                    <h2>Интересные истории</h2>
                </div> 
                <div className="col-md-8 row">
                {
                publication.map(({
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
                })=>{
                    return(
                        <PublicationList key={id}
                        id={id}
                        publicationName={publicationName}
                        limitationAge={limitationAge}
                        image={image}
                        text={text}
                        linkItem={linkItem}
                        date={date}
                        autorName={autorName}
                        linkItemComment={linkItemComment}
                        linkMenu={linkMenu}
                        linkYearFilm={linkYearFilm}
                        />
                    )
                })
                } 
                <ButtonPages
                    pages= {this.state.pages}
                    currentPage={this.state.currentPage}
                    // onButtonClick = {this.onButtonClick.bind(this)}
                /> 
                {this.zzz()}   
            </div>
            </div>
        )
    }
}

export default PublicationListButtonPages;