$('document').ready(function(){
	$("#resume_list li").click(function(event){
		var item = $(event.target).attr('item');
		$("#resume_content").find('.content').hide();
		$("#resume_content").find('#' + item).show();
	});
});