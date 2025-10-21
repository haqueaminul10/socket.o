'use client';

import { useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000', { autoConnect: true });

const Header = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server', socket.id);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  });
  return <div>header</div>;
};

export default Header;
