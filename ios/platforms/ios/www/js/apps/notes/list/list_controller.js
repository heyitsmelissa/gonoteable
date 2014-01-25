define([
	"app",
	"apps/notes/list/list_view",
	"entities/note"
], function(HT, View){

	HT.module("NotesApp.List", function(List, HT, Backbone, Marionette, $, _){

		List.Controller = Marionette.Controller.extend({

			initialize: function(){
				this.notes = HT.request("note:entities");

				this.layout = this.getLayoutView();

				this.listenTo(this.layout, "show", function(){
					this.notesRegion();
				});

				HT.mainRegion.show(this.layout);

				this.listenTo(this.layout, "notes:new", function(){
					console.log('new');
				});

			},

			getLayoutView: function(){
				return new View.Layout();
			},

			getNotesView: function(){
				return new View.Notes({collection:this.notes});
			},

			notesRegion: function(){
				var notesView = this.getNotesView();
				this.layout.notesRegion.show(notesView);
			}
		});

	});

	return HT.NotesApp.List;
});