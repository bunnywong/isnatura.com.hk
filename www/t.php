http://app.essoduke.org/tinyMap
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js"></script>
<script type="text/javascript" src="PATH_TO_PLUGIN/jquery.ui.map.js"></script>
<script>
$('#map_canvas').gmap().bind('init', function() { 
	// This URL won't work on your localhost, so you need to change it
	// see http://en.wikipedia.org/wiki/Same_origin_policy
	$.getJSON( 'http://jquery-ui-map.googlecode.com/svn/trunk/demos/json/demo.json', function(data) { 
		$.each( data.markers, function(i, marker) {
			$('#map_canvas').gmap('addMarker', { 
				'position': new google.maps.LatLng(marker.latitude, marker.longitude), 
				'bounds': true 
			}).click(function() {
				$('#map_canvas').gmap('openInfoWindow', { 'content': marker.content }, this);
			});
		});
	});
});
</script>