/*globals $:false */


(function() {
"use strict";

	//submitting form data which instantiates a new passenger, making sure the values are legal
	$('form').on('submit', function(event) {
		event.preventDefault();
		var passengerData = {
			name : $('#name').val(),
			origin : parseInt($('#origin').val()),
			dir : parseInt($('#dir').val())
		};
		if(passengerData.name && passengerData.origin >= 0 && passengerData.origin <=3 && (passengerData.dir === -1 || passengerData.dir === 1) ) {
			$.ajax({
				type: 'POST',
				url: '/newPassenger',
				data: passengerData,
				success: function(data) {
					if(!data.error) location.reload(true);
				}
			});

		} else {
			alert("Data is missing or incorrect");
		}
		$('#name').val("");
		$('#origin').val("");
		$('#dir').val("");
		location.reload();
	});

	//ticking the universe along
	$('#tickOnce').on('click', function(event) {
		$.ajax({
			type: 'GET',
			url: '/tick',
			success: function(data) {
				if(!data.error) location.reload(true);
			}
		});
	});



})();
