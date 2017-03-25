$(document).ready(function() {

	var options = {
		beforeSubmit: function(){
			var selected_file = $("#file").val();
			if(!selected_file){
				alert("Select a file first")
				return false
			}
			$("#loading_spin").show("fast");
		}
		, success: function(data){
			$("#loading_spin").hide();
			window.emitter.addResult(data);
		}
		, error: function(){
			$("#loading_spin").hide();
		}
	}

   $("#file").on("change", function(){
   		window.emitter.addResult(null);
   		if(this.value){
   			var value = this.value.split(/(\\|\/)/g).pop();
   			$("#file_path").html("<b>LAST SENT</b>: " + value);
   			$("#upload_file").ajaxSubmit(options);
   		}
   })
});

