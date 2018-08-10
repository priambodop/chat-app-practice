var socket = io();

socket.on('connect', function(){
  console.log('Connected to the server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server');
});

socket.emit('createMessage', {
  from: 'John',
  text: 'Im in'
}, function(data){
  console.log('Got it, ', data);
});
