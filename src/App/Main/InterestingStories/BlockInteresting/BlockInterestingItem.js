import React, {Component} from 'react';


class BlockInterestingItem extends Component{
    render(){
        const{
            image,
            title,
        } = this.props
        return(
            <div className="block_interesting1 row">
                <a href="">
                    <div className="block1_interesting">
                        <div className="img"><img src={image}/></div>
                        <div className="title_col title_col_interesting">{title}</div>
                    </div>
                </a>
            </div>
        )
    }
}

export default BlockInterestingItem;