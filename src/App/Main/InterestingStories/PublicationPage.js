import React from 'react';
import {Link} from 'react-router-dom'
import BlockDateNameComment from './PublicationListButtonPages/Publication/BlockDateNameComment';
import PublicationImage from './PublicationListButtonPages/Publication/PublicationImage';
import PublicationName from './PublicationListButtonPages/Publication/PublicationName';
import PublicationText from './PublicationListButtonPages/Publication/PublicationText';
import BlockLinkMenu from './PublicationListButtonPages/Publication/BlockLinkMenu/BlockLinkMenu';
import BlockLinkYearFilm from './PublicationListButtonPages/Publication/BlockLinkYearFilm/BlockLinkYearFilm';
import './publicationPage.css'
import AddComment from './Comment/AddComment';
import BlockComment from './Comment/BlockComment';

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
            <BlockComment
                publicationName = {publicationName}
            />
            <AddComment/>
        </div>        
    )
}
export default PublicationPage;