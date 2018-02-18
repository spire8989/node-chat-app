var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'Kevin',
    text: 'Hey. This is Kevin.'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  var messageString = `${message.from}: ${message.text}`;
  console.log(messageString);
});
