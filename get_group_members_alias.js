var list = jQuery('#member_search_result_list>li');
list.each(function(index, element) {
	var
		element = jQuery(element),
		nick_name,
		nick_name_commnet,
		_uin = element.attr('_uin');

	nick_name = jQuery('p>span', element).html();
	nick_name=nick_name.substring(2,nick_name.length-1);

	nick_name_commnet=


});