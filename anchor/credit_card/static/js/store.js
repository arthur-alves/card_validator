(function(){
	function Emitter(){
		var emitter =  new EventEmitter();
		var data = false;

		this.addChangeListener = function(callback) {
			emitter.addListener("change", callback)
		}

		this.emitChange = function(params){
			emitter.emitEvent("change", [params])
		}

		this.addResult = function(result) {
			data = result;
			this.emitChange(result);
		}

	}

	window.emitter = new Emitter()

})()
