define(["app","backfire"], function(HT){
	HT.module("Entities", function(Entities, PB, Backbone, Marionette, $, _){

		Entities.Note = Backbone.Model.extend({
			firebase: function(){
				return new Backbone.Firebase("https://noteable.firebaseio.com/note");
			}
		});

		Entities.NoteCollection = Backbone.Firebase.Collection.extend({
			model: Entities.Note,
			firebase: "https://noteable.firebaseio.com/note"
		});

		var API = {

			getNote: function(options){
				var note = new Entities.Note({
					id: options.id
				});

				return note;
			},

			getNotes: function(){
				var notes = new Entities.NoteCollection();

				return notes;
			},

		};

		HT.reqres.setHandler("note:entity", function(options){
			return API.getNote(options);
		});

		HT.reqres.setHandler("note:entities", function(){
			return API.getNotes();
		});

	});

	return;
});