import React from 'react';

const Menu = ()=>{
    return(
        <div className="block_menu row">
            <div className="menu">Меню</div>
            <div className="list_menu">
                <ul className="ul">
                    <li className="li"><a href="##">Интересные истории</a></li>
                    <li className="li"><a href="##">История кино</a></li>
                    <li className="li"><a href="##">Музыка из фильмов</a></li>
                    <li className="li"><a href="##">Мультики</a></li>
                    <li className="li"><a href="##">Мюзиклы</a></li>
                    <li className="li"><a href="##">Новости кино</a></li>
                    <li className="li"><a href="##">Сериальная жизнь</a></li>
                    <li className="li"><a href="##">Фильмы</a>
                        <ul>
                            <li className="li"><a href="##">Смотреть онлайн</a></li>
                        </ul>
                    </li>
                    <li className="li"><a href="##">Фильмы по комиксам</a></li>
                    <li className="li"><a href="##">Цитаты из фильмов</a></li>
                    <li className="li"><a href="##">Подборки фильмов</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;