var socket = io();

socket.on('connect', function(){
  console.log('Connected to the server');
});

socket.emit('createMessage', {
  'to': 'khalid@email.com',
  'text': 'Just do it'
});

socket.on('newMessage', function(message){
  console.log('new message:', message);
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server');
});
