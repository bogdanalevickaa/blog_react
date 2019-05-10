import React from 'react'
import PropTypes from 'prop-types'

const PopularCols = ({
    image,
    title,
    text
}) =>{
    return(
        <div className="block_col">
            <a href="##" title={title}>
                <div className="img">
                    <img alt="" src={image}/>
                </div>	
                <div className="title_col">{title}</div>
                <div className="text_col">{text}</div>
            </a>
        </div>
    )
}
PopularCols.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}
export default PopularCols