define(["app"], function(HT){
	HT.module("NotesApp", function(NotesApp, HT, Backbone, Marionette, $, _){

		NotesApp.Router = Marionette.AppRouter.extend({
			appRoutes: {
				"": "home",
			}
		})

		var API = {
			home: function(){
				require(["apps/notes/list/list_controller"], function(){
					new NotesApp.List.Controller();
				});
			},
			showNote: function(options){
				require(["apps/notes/show/show_controller"], function(){
					new NotesApp.Show.Controller(options);
				});
			}
		};

		HT.on("notes:show", function(options){
			API.showNote(options);
		});

		HT.on("notes:list", function(){
			API.home();
		});

		HT.addInitializer(function(){
			new NotesApp.Router({
				controller: API
			});
		});

	});

	return HT.NotesApp;
});