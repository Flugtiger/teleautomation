var Controller = function() {
	'use strict';
	
	var checkSelection = function() {
		var from = $('#tank_from').val();
		var to = $('#tank_to').val();
		
		if(from === to) {
			$('#start_pumping').attr('disabled', 'disabled');
		} else {
			$('#start_pumping').removeAttr('disabled');
		}
	}
	
	return {
		init : function(proc) {
			$('#start_pumping').click(function() {
				var from = $('#tank_from').val();
				var to = $('#tank_to').val();
				proc.setValues(from, to);
			})
			
			$('#stop_pumping').click(function() {
				proc.setValues(0, 0);
			})
			
			$('#tank_from, #tank_to').change(checkSelection);
		}
	};
	
}();