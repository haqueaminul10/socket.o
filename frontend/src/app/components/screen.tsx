'use client';
import { useEffect, useState } from 'react';

const Screen = ({ socket }: any) => {
  const [text, SetText] = useState('');

  useEffect(() => {
    socket.on('testMessage2', (data: any) => {
      console.log(`📌 ~ send from server:`, data);
    });
  }, []);

  const onchangeSendMessage = (e: any) => {
    SetText(e.target.value);
  };

  const sendMessage = () => {
    socket.emit('testMessage', text);
    // console.log(`📌 ~ text:`, text);
    SetText(' ');
  };

  return (
    <div>
      <input
        type='text'
        className='border-2 border-black'
        name='text'
        value={text}
        onChange={onchangeSendMessage}
      />
      <button className='border-2 border-black' onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};

export default Screen;
