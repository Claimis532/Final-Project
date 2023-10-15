import React from 'react';
import Comment from './Comment';
import ChatBlock from './chatBlock';
import './style.css'; 
import { useState } from 'react';
import { useStorage } from '../hooks/useStorage';

const Chat = () => {
  const [chatData, setChatData] = useStorage("CHAT", []);
  const [inputValue, setInputValue] = useState('');
  const [showDialogReg, setshowDialogReg] = useState(false);

  console.log(chatData);

  const [user] = useStorage('user');

  const sendChat = () => {
    if (user) {
      setChatData([...chatData, `${user}: ${inputValue}`]);
      setInputValue("");
    } else {
      setshowDialogReg(true);
      setInputValue("");
    }
  };

  return (
    <div className='chat-container'>
      <ChatBlock chatData={chatData} />
      <Comment
        inputValue={inputValue}
        setInputValue={setInputValue}
        sendChat={sendChat}
        setChatData={setChatData}
        showDialogReg={showDialogReg}
      />
    </div>
  );
}

export default Chat;
