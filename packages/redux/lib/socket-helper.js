import { eventChannel } from 'redux-saga';

export const createWebSocketConnection = socketServerURL => {
  const socket = new WebSocket(socketServerURL);
  return new Promise(resolve => {
    socket.onopen = () => {
      resolve(socket);
    };
  });
};

export const createSocketChannel = (socket, actions) =>
  eventChannel(emit => {
    socket.onmessage = e => {
      try {
        const { event, data } = JSON.parse(e.data);
        return emit({ type: actions[event], data });
      } catch (e) {
        console.error(e);
      }
    };

    socket.onerror = () => {
      socket.close();
    };

    return () => {
      socket.close();
    };
  });
