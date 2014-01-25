define([
	"marionette",
	"config/settings"
], function(Marionette){

	var HT = new Marionette.Application();

	HT.on("initialize:before", function() {
	});

	HT.addRegions({
		mainRegion: "#main-region"
	});

	HT.addInitializer(function(){	
	});


	HT.on('initialize:after', function() {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});	

	return HT;
});