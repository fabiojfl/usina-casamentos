function initMap() {
		    var mapOptions = {
		        center: new google.maps.LatLng(-15.835646, -47.916119),
		        zoom: 18,
		        mapTypeId: google.maps.MapTypeId.HYBRID
		    }
			var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}