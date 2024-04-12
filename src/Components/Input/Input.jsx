import React,{useState} from 'react'
import './Input.scss'
import { FaPaperclip } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Input = ({addMsg}) => {

    const [message,setMessages] = useState("");


  return (
    <div className='input'>
        <div className='r1'>
            <form onSubmit={(e)=>{
                addMsg(e,message)
                setMessages("");}
                }>
            <div className='input_form'>
                <input type='text' placeholder='Type Your Message' value={message} onChange={(e)=>setMessages(e.target.value)}/>
                <FaPaperclip/>
            </div>
            <button type='submit'>
                <MdOutlineArrowForwardIos/>
            </button>
            </form>
        </div>
        <div className='r2'>
            <span>
                <span className='power'>Powered by</span> <span className='name'> Krunk.ai </span> <img src='/mic.svg' alt='logo'/>
            </span>
        </div>
    </div>
  )
}

export default Input