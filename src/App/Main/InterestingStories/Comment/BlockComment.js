import React from 'react';

const BlockComment = ({
    publicationName
}) =>{
    return(
        <div className="block_comment">
            <h2>Отзывы статьи: "{publicationName}"</h2>
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
    )
}

export default BlockComment;