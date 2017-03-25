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
   		   	var type = this.files[0].type;
   		   	if(type != "text/plain"){
   				window.emitter.addResult(
   					{"error": "Invalid file type"},
   					{"results": []}
   				);
   				return
   		   	}

   			var size = this.files[0].size;
   			if(size > 1024 * 1024 * 5){
   				window.emitter.addResult(
   					{"error": "This file exceeds 5MB"},
   					{"results": []}
   				);
   				return
   			}
   			var value = this.value.split(/(\\|\/)/g).pop();
   			$("#file_path").html("<b>LAST SENT</b>: " + value);
   			$("#upload_file").ajaxSubmit(options);
   		}
   })
});

