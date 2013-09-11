var startTime = new Date().getTime(), dt;

$.await(function() {
	var deferred1 = new $.Deferred();
	var deferred2 = new $.Deferred();
	setTimeout(deferred1.resolve.bind(deferred1), 1000);
	deferred1.then(function() {
		setTimeout(deferred2.resolve.bind(deferred2), 1000);;
	})
}).then(function() {
	dt = new Date().getTime() - startTime;
});

setTimeout(function() {
	console.log(dt);
}, 2500)