var jqmLayout = function() {
	'use strict';
	
	var header, title, menu_panel, menu_list, pages;
	
	return {
		init: function() {
			// retrieve objects
			header = $("#header");
			title = $("#page_title");
			menu_panel = $("#menu_panel");
			menu_list = menu_panel.find('ul');
			pages = $("body div[data-role=page]");
			
			// init external toolbars
			header.toolbar({ theme: "a" }).enhanceWithin();
			
			// init menu panel
			menu_panel.panel({ theme: 'a'}).enhanceWithin();
			
			// set initial title
			title.text(pages.eq(0).data('title'));
			
			// insert links to menu
			pages.each(function(index, element) {
				var page = $(element);
				var link = $('<a data-rel="close"/>');
				link.text(page.data('title'));
				link.attr('href', '#' + page.attr('id'));
				menu_list.append($('<li/>').append(link));
			});
			menu_list.listview("refresh");
			
			// menu items click
			menu_list.on('click', 'a', function() {
				menu_list.find('a').removeClass('selected');
				$(this).addClass('selected');
				menu_panel.panel('close');
			})
			
			// page changed
			$("body").on("pagecontainershow", function(event, ui) {
				// update title in toolbar
				title.text(ui.toPage.data('title'));
			});
		},
	};
}();