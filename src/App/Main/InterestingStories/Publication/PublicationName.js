import React, {Component} from 'react';

import PropTypes from 'prop-types';

class PublicationName extends Component{
    static propTypes = {
        publicationName: PropTypes.string.isRequired,
    }
    render(){
        const{
            publicationName,
        } = this.props
        return(
            <div className="publication_name h2">
                <h2>{publicationName}</h2>
            </div>
        )
    }
}
export default PublicationName;