	
	
	$.ajaxSetup({crossDomain: true, xhrFields: {withCredentials: true}});
	$.ajax({
		type:"get",
		url:webUrl+"web/adam/api/v1/roles/all",
		async:false,
		success:function(data){
			debugger;
			//console.log(data);
		}
	});