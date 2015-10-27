/*
    script file for index.html
    dependencies: leaflet, jquery

    Open Street Maps tile layer URL template:
    http://{s}.tile.osm.org/{z}/{x}/{y}.png

    attribution:
    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
*/
$(function() {
	'use strict';

	function createMap(loc, zoom) {
		var map = L.map('map').setView(loc, zoom);

		L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);

		L.circleMarker(loc).addTo(map).bindPopUp('Hello');
	}

	createMap([47.6097, -122.3331], 12);
	createMap([47.7000, -122.3331], 12)

});