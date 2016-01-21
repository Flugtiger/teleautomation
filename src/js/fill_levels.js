var FillLevels = function() {
	'use strict';
	
	var tank_container;
	var maxLevel = 280;
	
	return {
		init : function() {
			tank_container = $('.tank_container');
			
			// add tanks
			var tank_temp = tank_container.find('.tank');
			tank_container.empty();
			for ( var i = 1; i < 4; i++) {
				var tankdiv = tank_temp.clone();
				tankdiv.find('.tank_name').text('Tank ' + i);
				tankdiv.attr('id', 'tank' + i);
				tank_container.append(tankdiv);
			}
		},
		update : function(data) {
			for(var i = 1; i < 4; i++) {
				var tank = $('#tank'+i);
				
				// setze Tank-Füllstand
				var level = data['level'+i];
				tank.find('.tank_liquid').css('height', (100 * level / maxLevel) + "%");
				tank.find('.tank_liters').text(level + " L");
				
				// setze Sensoren
				if(data['level'+i+'High'])
					tank.find('.upper.sensor').addClass('warn');
				else
					tank.find('.upper.sensor').removeClass('warn');
				if(data['level'+i+'Low'])
					tank.find('.lower.sensor').addClass('warn');
				else
					tank.find('.lower.sensor').removeClass('warn');
			}
		}
	};
}();