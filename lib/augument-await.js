(function(global) {
	var origCall = Function.prototype.call;

	var inAwait = false;

	var await = function await(fn) {
		inAwait = true;
		fn();
		inAwait = false;
	};
	

	Function.prototype.call = function (scope) {
	    console.log("calling a function");

	    var args = Array.prototype.slice.call(arguments, 1);
	    return origCall.apply(scope, args);
	};

	global["await"] = await;
})(window);