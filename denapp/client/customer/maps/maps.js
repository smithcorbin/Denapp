var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
	center: {lat: 40.0722, lng: -82.5225},
	zoom: 8
    });
}
