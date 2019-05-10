import React from 'react'
import PopularCols from './PopularCols';
import popular from './popular';

const PopularCol = () => {
    return(
        <div>
            <div className="row">
            {
                popular.map(({
                    id,
                    image,
                    title,
                    text
                })=>{
                    return(
                        <div className="col-md-4" key={id}>
                            <PopularCols
                                image={image}
                                title={title}
                                text={text}
                            />
                        </div>
                    )
                })
            }
                {/* <div className="col-lg-6">
                    <ProductListItem
                        name="iPhone 7"
                        description="This is iPhone 7"
                        type="phone"
                        capacity="256"
                        price="800"
                    />
                </div> */}
            </div>
        </div>
    )
}
export default PopularCol;