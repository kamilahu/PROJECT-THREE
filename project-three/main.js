function initMap() {
	// point one:
	// setting latitude and longitude:
	var latlong1 = {lat: 33.758708, lng: -118.019586};
	// drawing the map on the screen (telling the API to create a new map):
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 8.8,
		center: latlong1
	});// ends map
	// specifies where the marker goes:
	var marker = new google.maps.Marker({
		position: latlong1,
		map: map
	});

	//point two:
	var latlong2 = {lat: 34.241093, lng: -118.266660};
	// specifies where the marker goes:
	var marker = new google.maps.Marker({
		position: latlong2,
		map: map
	});

	//point three:
	var latlong3 = {lat: 33.758490, lng: -118.111193};
	// specifies where the marker goes:
	var marker = new google.maps.Marker({
		position: latlong3,
		map: map
	});

	//point four:
	var latlong4 = {lat: 33.125072, lng: -117.324690};
	// specifies where the marker goes:
	var marker = new google.maps.Marker({
		position: latlong4,
		map: map
	});

	//point five:
	var latlong5 = {lat: 33.953679, lng: -118.396679};
	// specifies where the marker goes:
	var marker = new google.maps.Marker({
		position: latlong5,
		map: map
	});
} //ends function