import React, {Component} from 'react';

import PropTypes from 'prop-types';

class PublicationText extends Component{
    static propTypes = {
        text: PropTypes.string.isRequired,
    }
    render(){
        const{
            text,
        } = this.props
        return(
            <div className="text_col">{text}</div>
        )
    }
}

export default PublicationText;