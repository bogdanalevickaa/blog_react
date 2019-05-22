import React from 'react';

const AddComment = () =>{
    return(
        <div className="block_comment">
            <h2 className="">Добавить отзыв</h2>
            <input type="text" name="name" placeholder="Ваше имя"></input>
            <input type="email" name="email" placeholder="Ваша электронная почта"></input>
            <textarea className="comment_write" name="comment" placeholder="Ваше мнение"></textarea>
            <button className="button">Отправить отзыв</button>
        </div>
    )
}

export default AddComment;