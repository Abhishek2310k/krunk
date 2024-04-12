import React from 'react'
import './Chat.scss'
const Chat = ({messages}) => {

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

  const currentTime = getCurrentTime();

  return (
    <div className='chats'>
      <div className='chat received'>
        <div className='content'>
          Hi Sam! I am your personal shopping assistant , how can i help you today ?
        </div>
        <div className='time'>
          {currentTime}
        </div>
      </div>
      <div className='spec'>
        {messages.map((item,index)=>{
          console.log(item);
          return(
          <div className='sent' key={index}>
            {/* <div className='chat_comp'> */}
              <div className='content'>
                I am looking for a hand bag, with long strap .
              </div>
              <div className='time'>
                {item.time}
              </div>
            {/* </div> */}
        </div>
        )})}
      </div>
    </div>
  )
}
export default Chat