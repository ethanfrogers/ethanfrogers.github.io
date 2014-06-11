$('document').ready(function(){
	$("#resume_list button").click(function(event){
		var item = $(event.target).parents('li').attr('item');
		$("#resume_list").find('button').removeClass('btn-primary');
		$(event.target).addClass('btn-primary');
		$("#resume_content").find('.content').hide();
		$("#resume_content").find('#' + item).slideDown(500);
	});
});