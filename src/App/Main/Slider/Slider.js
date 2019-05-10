import React from 'react';

import '../Slider/slick.css'
import '../Slider/slick-theme.css'
// import '../Slider/slick.min'

const Slider = () =>{
    return(
        <div className="conteiner_main row">
            <div className="slider">
                <div>
                    <a href="">
                        <img src="../public/img/1.jpg"/>
                        <div className="block">
                            <div className="block_name">Сериал «Сверхъестественное» закроют</div>
                            <div className="block_text">Издание Variety сообщило что пятнадцатый сезон популярного телевизионного сериала «Сверхъестественное» станет...</div>
                        </div>
                    </a>
                </div>
                <div>
                   <a href="">
                        <img src="../public/img/2.jpg"/>					
                        <div className="block">
                            <div className="block_name">Стало известно название сиквела фильма «Последний богатырь»</div>
                            <div className="block_text">Теперь известно название продолжения фильма-сказки 2017 года «Последний богатырь», это анонсировало представительство компании Walt Disney в России, а также...</div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="../public/img/3.jpg"/>
                        <div className="block">
                            <div className="block_name">Джеймс Ганн снимет «Стражи Галактики. Часть 3»</div>
                            <div className="block_text">Все-таки «Стражи Галактики. Часть 3» мы увидим под режиссурой создателя двух предыдущих частей Джеймса Ганна, об этом сообщает со ссылкой...</div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="../public/img/4.jpg"/>
                        <div className="block">
                            <div className="block_name">Ёлки Последние (2019)</div>
                            <div className="block_text">Каждый год наш русский кинематограф радует всех россиян новым добрым фильмам про Ёлки, сюжет конечно в некоторых частях совсем уж банальный, наивный и фантастичный...</div>
                        </div>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="../public/img/5.jpg"/>
                        <div className="block">
                            <div className="block_name">Люди в черном: Интернэшнл (Men in Black International) 2019</div>
                            <div className="block_text">Перезапуск известного фильма про Людей в черном планируется выйти 17 мая 2019 в мире (13 июня в России) под названием «Люди в черном...</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default Slider;