(function(jQuery) {
	var $ = jQuery;

	jQuery.await = function(fn) {
		var deferred = new $.Deferred();
		var deferredCall = $.Deferred;
		var deferredStack = [];
		$.Deferred = function() {
			var result = deferredCall.apply(this, arguments);
			deferredStack.push(result);			
			return result;
		};
		fn();
		$.Deferred = deferredCall;
		$.when.apply(window, deferredStack).then(deferred.resolve.bind(deferred), deferred.reject.bind(deferred));
		return deferred;
	};
	
})(jQuery || $);