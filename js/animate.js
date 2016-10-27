// JavaScript Document

$(document).ready(function(){
	
	// $('ul.tabs li').click(function(){
	$('ul.tabs').find('li').click(function(){
		var tab_id = $(this).attr('data-tab');
		// alert(tab_id);
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})