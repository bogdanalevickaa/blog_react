import React from 'react';

import PopularCol from './PopularCols/PopularCol';
import Menu from './Menu/Menu';

const HomePage = () =>{
    return(
        <div className="main">
            <div className="section row">
                <h2>Популярные</h2>
                <PopularCol/>
            </div>
            <div className="col row">
                <div className="col-md-8 row">
                    <div className="block_author row">
                        <div className="title_col_author">Об авторе</div>
                        <div className="text_col_author">
                            <img src="/img/author.jpeg" className="img_author"/>
                            <div className="words_author">
                                <p>Рада приветствовать вас на своем блоге про фильмы, сериалы и мультфильмы VkadreNet.Ru. Меня зовут Оксана. На этом сайте я стараюсь собрать больше полезной информации для своих читателей и поэтому делюсь не только отзывами о фильмах, но и новостями из мира кино, забавными видео (то, что было за кадром), музыкой и цитатами из полюбившихся фильмов.</p>
                                <p>Про себя могу сказать, что я веселая, позитивная и жизнерадостная, оптимистка. Люблю все новое и необычное.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <Menu/>
                </div>
            </div>
        </div>
    )
}
export default HomePage;