import React, { useState, useEffect } from "react";
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../Utils/chatSlice';
import { generateRandomName, getRandomMsg } from '../Utils/helper';

const LiveChat = () => {
    const [liveMsg, setLiveMsg]=useState("");

    const dispatch=useDispatch();

    const ChatMessages=useSelector((store) =>store.chat.messages);

    useEffect(()=>{
      const i = setInterval(()=>{

        dispatch(addMessages({
            name:generateRandomName(),
            message:getRandomMsg(20),
        }))
        }, 2000);
        return ()=>clearInterval(i);
        //eslint-disable-next-line
    }, []);

  return (
    <>
    <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      
      {ChatMessages.map((c, index)=>
      <ChatMessage key={index} name={c.name} message={c.message}/>
      )}
    </div>
    <form className='w-full p-2 ml-2 border border-black ' onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessages({
            name:"Chakri",
            message:liveMsg,
        }));
        setLiveMsg("");
    }}>
       <input className='w-96 px-2' type='text' value={liveMsg} onChange={(e)=>{
        setLiveMsg(e.target.value);
       }}/>
       <button className='px-2 mx-2 bg-green-100' type='submit'>Send</button>
    </form>
    </>
  )
}

export default LiveChat;
