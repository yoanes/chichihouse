function initialize() {
	var latLon = new google.maps.LatLng(-37.894357, 145.077396);
	
	var mapOptions = {
	  center: latLon,
	  zoom: 15,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	var marker = new google.maps.Marker({
      position: latLon,
      map: map,
      title: "Chi Chi House"
	});
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	var hideAll = function() {
		var dynamics = $("#dynamic").children();
		
		dynamics.each(function(){
			$(this).addClass("hidden");
		});
	};
	
	var prev = null;
	
	$("#menuLink").click(function(){
		if(prev !== "menu") {
			hideAll();
		}
		$("#menu").toggleClass("hidden");
		prev = "menu";
	});
	
	$("#mapLink").click(function(){
		if(prev !== "map") {
			hideAll();
		}
		$("#map").toggleClass("hidden");
		prev = "map";
	});
});