import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import './Main.scss';
import Chat from '../Components/Chat/Chat';
import Input from '../Components/Input/Input';
import Product from '../Components/Product/Product';

const Main = () => {
  const [messages, setMessages] = useState([]);

  const getCurrentTime = () => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0 hours)
    const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
    return formattedTime;
  };

  const addMsg = (e, msg) => {
    e.preventDefault();
    const currentTime = getCurrentTime();
    const newMessage = { msg: msg, time: currentTime };
    // Create a new array with all current messages, plus the new message
    setMessages([...messages, newMessage]);
  }
  return (
    <div className='main'>
        <Navbar/>
        <Chat messages={messages}/>
        <Product messages = {messages}/>
        <Input addMsg={addMsg}/>
    </div>
  );
}

export default Main;
