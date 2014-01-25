define([
	"app",
	"apps/notes/show/show_view",
], function(HT, View){
	HT.module("NotesApp.Show", function(Show, HT, Backbone, Marionette, $, _){

		Show.Controller = Marionette.Controller.extend({

			initialize: function(options){
				this.note = options.model;

				this.layout = this.getLayoutView();

				this.listenTo(this.layout, "show", function(){
					this.noteRegion();
				});

				HT.mainRegion.show(this.layout);
			},

			getLayoutView: function(){
				return new View.Layout();
			},

			getNoteView: function(){
				return new View.Note({model:this.note});
			},

			noteRegion: function(){
				var noteView = this.getNoteView();
				this.layout.noteRegion.show(noteView);
			},

		});
	});

	return HT.NotesApp.Show;
});