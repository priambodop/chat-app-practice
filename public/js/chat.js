var socket = io();

socket.on('connect', function(){
  console.log('Connected to the server');

  var params = jQuery.deparam(window.location.search);

  socket.emit('join', params, function(err){
    if (err) {
      alert(err);
      window.location.href = '/';
    }else{
      console.log('No error :)');
    }
  });
});

socket.on('newMessage', function(message){
  console.log('newMessage', message);
  var li = jQuery('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  jQuery('#messages').append(li);
});

socket.on('updateUserList', function(users){
  var ol = jQuery('<ol></ol>');

  users.forEach(function(user){
    ol.append(jQuery('<li></li>').text(user));
  });

  jQuery('#users').html(ol);

});

socket.on('disconnect', function(){
  console.log('Disconnected from the server');
});

jQuery('#message-form').on('submit', function(e){
  e.preventDefault();

  var messageTextbox = jQuery('[name=message]');
  var messageButton = jQuery('#send-message');

  socket.emit('createMessage', {
    text: jQuery('[name=message]').val()
  }, function(){
    // messageButton.attr('disabled', 'disabled');
    messageTextbox.val('');
  });
});
