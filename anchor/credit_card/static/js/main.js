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
			window.emitter.addResult(data)
		}
		, error: function(){
			$("#loading_spin").hide();
		}
	}

   $("#upload_file").ajaxForm(options);
});

