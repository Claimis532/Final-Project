import React from 'react';
import { Link } from 'react-router-dom';
import './comment.css';

const Comment = (props) => {
  return (
    <div>
      <label className='text'>Комментарий:</label>
      <input className='input' value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)} />
      <button className="comment-button" onClick={props.sendChat}>
        Отправить
      </button>
      <button className="comment-button" onClick={() => props.setChatData([])}>
        Удалить
      </button>

      {props.showDialogReg && (
        <div>
          Пожалуйста, зарегистрируйтесь! Пройдите регистрацию по этой <Link to="/">ссылке</Link>
        </div>
      )}
    </div>
  );
};

export default Comment;
