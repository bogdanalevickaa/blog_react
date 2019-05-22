import React from 'react';
import {Link} from 'react-router-dom'
import BlockDateNameComment from './PublicationListButtonPages/Publication/BlockDateNameComment';
import PublicationImage from './PublicationListButtonPages/Publication/PublicationImage';
import PublicationName from './PublicationListButtonPages/Publication/PublicationName';
import PublicationText from './PublicationListButtonPages/Publication/PublicationText';
import BlockLinkMenu from './PublicationListButtonPages/Publication/BlockLinkMenu/BlockLinkMenu';
import BlockLinkYearFilm from './PublicationListButtonPages/Publication/BlockLinkYearFilm/BlockLinkYearFilm';
import './publicationPage.css'

const PublicationPage = ({
    id,
    publicationName,
    limitationAge,
    image,
    text,
    date,
    autorName,
    linkItemComment,
    linkMenu,
    linkYearFilm
}) =>{
    return(
        <div className="col-md-8 row" >
            <div className="publication">
                <PublicationName key = {id}
                    publicationName = {publicationName}
                />
                <div className="conteiner_breadcrumb">
                    <ul className="breadcrumb">
                        <li><Link to = "/">Главная станица</Link></li>
                        <li><Link to = "/interesting_stories">Интерестные истории</Link></li> 
                        <li className="active">Как на самом деле снимаються фильмы</li>
                    </ul>
                </div>
                <PublicationImage
                    limitationAge = {limitationAge}
                    image = {image}
                />
                <PublicationText
                    text={text}
                />
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «ЖИЗНЬ ПИ» (LIFE OF PI) 2012</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling1.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling2.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «ВОЛК С УОЛЛ-СТРИТ» (THE WOLF OF WALL STREET) 2013</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling3.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling4.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «ЖЕЛЕЗНЫЙ ЧЕЛОВЕК» (IRON MAN) 2008</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling5.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling6.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «ЧЕЛОВЕК ИЗ СТАЛИ» (MAN OF STEEL) 2013</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling7.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling8.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «АЛИСА В СТРАНЕ ЧУДЕС» (ALICE IN WONDERLAND) 2010</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling9.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling10.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="publication_filling">
                    <div className="filling_title">ФИЛЬМ «ОДИНОКИЙ РЕЙНДЖЕР» (THE LONE RANGER) 2013</div>
                    <div className="col-md-8-4 filling">
                        <p>Как снимали:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling11.jpg"></img>
                        </div>
                    </div>
                    <div className="col-md-8-4 filling">
                        <p>Как на экране:</p>
                        <div className="img_filling row">
                            <img className="img_filling_img" src="img/filling12.jpg"></img>
                        </div>
                    </div>
                </div>
                <div className="text_col">Если вы обратили внимание, то снимают такие сцены всегда или на зеленом или на синем фоне. И наверно сразу возникает вопрос, а почему не на каком либо другом? Все потому что в человеке как детали изображения мало синего и зелёного. А значит, его контур на таком фоне легко выделить чисто техническими средствами (анализируя деленную или синюю компоненту изображения). И потом на это свободное от человека места добавить любое изображение, которое надо. Обычно именно так создаётся необходимый фон во всех фильмах. И последнее время все стали чаще прибегают к такому способу создания фильмов, ведь проще снять на зеленом фоне, чем строить порой дорогостоящие декорации.</div>
                <BlockDateNameComment
                    date = {date}
                    autorName = {autorName}
                    linkItemComment = {linkItemComment}
                />
                <BlockLinkMenu
                    linkMenu = {linkMenu}
                />
                <BlockLinkYearFilm
                    linkYearFilm = {linkYearFilm}
                />
            </div>
            <div className="block_comment">
                <h2>Отзывы статьи: "Как на самом деле снимаються фильмы"</h2>
                <div className="no_comments">
                    <div className="no_comments_text">На даный момент нет коментариев. Mожете оставить свой коментарий внизу.</div>
                </div>
                <div className="block_user_comment row">
                    <div className="comment_user row">
                        <div className="name_user">Коментарий от "dana"</div>
                        <div className="comment_user_text">Добрый вечер! Предлагаю дополнить список фильмом 2018 года "Красотка на всю голову" - фильм хоть и комедийный, но носит глубокий смысл для большинства девушек !</div>
                        <div className="data_comment_user">19.02.2019</div>
                    </div>
                </div>
            </div>
            <div className="block_comment">
                <h2 className="">Добавить отзыв</h2>
                <input type="text" name="name" placeholder="Ваше имя"></input>
                <input type="email" name="email" placeholder="Ваша электронная почта"></input>
                <textarea className="comment_write" name="comment" placeholder="Ваше мнение"></textarea>
                <button className="button">Отправить отзыв</button>
            </div>
        </div>        
    )
}
export default PublicationPage;