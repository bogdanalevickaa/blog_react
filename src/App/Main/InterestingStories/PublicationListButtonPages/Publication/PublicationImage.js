import React, {Component} from 'react';

import PropTypes from 'prop-types';

class PublicationImage extends Component{
    static propTypes = {
        limitationAge: PropTypes.string.isRequired,
    }
    render(){
        const{
            limitationAge,
            image,
        } = this.props
        return(
            <div className="publication_img row">
                <div className="age">{limitationAge}</div>
                <img src={image}/>
            </div>
        )
    }
}

export default PublicationImage;