$(document).ready(function(){
	$('.sessionTab').click(function(){
		$(this).addClass('current').siblings().removeClass('current');
		if($('#nowSession').hasClass('current')){
			$('#nowSessionList').css('display','block');
			$('#historySessionList').css('display','none');
		}else{
			$('#nowSessionList').css('display','none');
			$('#historySessionList').css('display','block');
		}
	})
})