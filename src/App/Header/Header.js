import React from 'react';

const Header = () =>{
    return(
        <div>
            <header className="header">
                <div className="conteiner">
			        <div className="pole row">
                        <div className="logo">
                            <a href="index.html">
                                <div className="img_logo"><img src="/img/logo.png"/></div>
                                <div className="name_site">VkadreNet</div>
                            </a>
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