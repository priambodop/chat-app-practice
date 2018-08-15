var socket = io();

socket.on('connect', function(){
  console.log('Connected to the server');
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('disconnect', function(){
  console.log('Disconnected from the server');
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');
  var messageButton = jQuery('#send-message');

  socket.emit('createMessage', {
    from: 'User',
    text: jQuery('[name=message]').val()
  }, function(){
    // messageButton.attr('disabled', 'disabled');
    messageTextbox.val('');
  });
});
