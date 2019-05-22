import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <div>
            <header className="header">
                <div className="conteiner">
			        <div className="pole row">
                        <div className="logo">
                            <Link to="/">
                                <div className="img_logo"><img src="/img/logo.png"></img></div>
                                <div className="name_site">VkadreNet</div>
                            </Link>
                            <div className="fraza">блог о кино, фильмах, сериалах и мультфильмах</div>
                        </div>
                        <div className="search">
                            <input type="search" name="" placeholder="Что ищем?"/>
                            <button className="naiti">Найти</button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;