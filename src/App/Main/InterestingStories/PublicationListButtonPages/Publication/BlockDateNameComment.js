import React, {Component} from 'react';

import PropTypes from 'prop-types';


class BlockDateNameComment extends Component{
    static propTypes = {
        autorName: PropTypes.string.isRequired,
    }
    render(){
        const{
            date,
            autorName,
            linkItemComment
        } = this.props
        return(
            <div className="publication_block">
                <div className="publication_date_name date">{date}</div>
                <div className="publication_date_name name">{autorName}</div>
                <div className="publication_comment comment"><a href="">коментарии</a></div>
            </div>
        )
    }
}

export default BlockDateNameComment;