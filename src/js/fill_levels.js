var FillLevels = function() {
	'use strict';
	
	var tank_container;
	
	return {
		init : function() {
			tank_container = $('.tank_container');
			
			// add tanks
			var tank_temp = tank_container.find('.tank');
			tank_container.empty();
			for ( var i = 0; i < 3; i++) {
				var tankdiv = tank_temp.clone();
				tankdiv.find('.tank_name').text('Tank ' + (i + 1));
				tankdiv.attr('id', 'tank' + i);
				tank_container.append(tankdiv);
			}
		},
	};
}();