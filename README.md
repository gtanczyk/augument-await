Augument-await
==============

JavaScript await instruction without transpiler. It is implemented as jQuery plugin and also as augumented Function call.

jQuery plugin
-------------

  $.await(function() {
	  $.get('/api/entity/info').then(function(info) {
  	  $.post('/api/entity/delete', { id: info.id });
	  });
  }).then(function() {
	  console.log('This will be called once $.post ajax request is completed');
  });
  
Augumented function call
------------------------

(function() {
  await(function() {
    $.get('/api/entity/info').then(function(info) {
  	  $.post('/api/entity/delete', { id: info.id });
    });
  });
  console.log('This will be called once $.post ajax request is completed');
})();
