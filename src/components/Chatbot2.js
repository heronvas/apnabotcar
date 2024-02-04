// Chatbot.js

import React, { useState, useRef, useEffect } from 'react';
//import { FaRobot } from 'react-icons/fa';
import { IoSend } from 'react-icons/io5';
import axios from 'axios';
import { ReactComponent as MySVG } from './img1.svg';
import './styles.css';

const Chatbot = ({visible,close}) => {
  
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // Overall loading state
  const messageref = useRef(null);
 
  const resp =  axios.post( 
    'https://cardekh.azurewebsites.net/website',
    {
      phone_no: "8493993",
      message: "hi",
    }
    );

    console.log(resp);
  
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return randomNumber;
  };

  const random10DigitNumber = generateRandomNumber();


  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newUserMessage = {
      text: input,
      type: 'user',
    };

    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(
        'https://cardekh.azurewebsites.net/website',
        {
          phone_no: random10DigitNumber,
          message: input,
        }
      );
        
      const newBotMessage = {
        text: response.data,
        type: 'bot',
        loading: false, // Set loading to false for the latest bot message
      };

      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      console.log("new bot");
      console.log(response.data);
    } catch (error) {
        console.log(error)
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    messageref.current?.scrollIntoView();
  }, [messages]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  

  return (
    
<div className={visible ? 'chatbot navblur': 'chatbot active navblur'}>{console.log(visible)}
   
    
        
    
      
  
    <div className='con1'>
      <div className='introduction'>
        <div className='intro'>Welcome</div>
        <div className='wel'>How may I assist you today?</div>
      </div>
      
      


           
         
          
      <div className='messages'>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${
              message.type === 'bot' ? 'messagebot' : 'messageuser'
            }`}
          >
            <div
              key={index}
              className={`image${
                message.type === 'bot' ? 'bot' : 'user'
              }`}
            >
              {message.type === 'bot' ? (
                 <MySVG  className='icon2 text-blue-800' width="45px" height="45px"/>) : null}
            </div>
            <div
              key={index}
              className={` ${message.type === 'bot' ? 'bot' : 'user'}`}
            >
              {message.text.split('\n').map((item, idx) => { /* have added the split part*/ 
        return (
          <span key={idx}>
            {item}
            <br/>
          </span>
        );
        })}
            </div>
          </div>
        ))}
        
      </div>
            
      {
         loading=== true ? (
      <div className='messagebot'>
        <div className='img-bot'><MySVG  className='icon2 text-blue-800' width="45px" height="45px"/></div>
        <div className='loading-spinner bots'></div>
        
    </div>
):console.log('eror')}
      
     

      <div ref={messageref} className='mdiv'></div>
      <div className='chatbot-input'>
        <input
          type='text'
          value={input}
          onChange={handleInputChange}
          className=' inputm'
          placeholder='Type a message...'
          onKeyPress={handleEnterPress}
        />
        <button onClick={handleSendMessage} className='button1'>
          <IoSend className='send' />
        </button>
      </div>
    </div>
  </div>
);
};

export default Chatbot;
