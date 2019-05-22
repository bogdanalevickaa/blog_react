import React, {Component} from 'react';

class ButtonPage extends Component{
    render(){
        const{
            page,
            onButtonClick,
            currentPage
        } = this.props
        return(
            <button className="page" key={page} {...currentPage === page}
                onClick={()=>onButtonClick()}
            >{page}</button>
        )
    }
}
export default ButtonPage;