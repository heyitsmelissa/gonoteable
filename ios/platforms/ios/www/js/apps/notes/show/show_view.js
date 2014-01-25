define([
	"app",
	'text!apps/notes/show/templates/layout.html',
	'text!apps/notes/show/templates/note.html',
], function(HT, LayoutTemplate, NoteTemplate){
	HT.module("NotesApp.Show", function(View, HT, Backbone, Marionette, $, _){

		View.Layout = Marionette.Layout.extend({
			template: LayoutTemplate,
			regions: {
				noteRegion: "#note-region"
			}
		});

		View.Note = Marionette.ItemView.extend({
			template: NoteTemplate
		});

	});

	return HT.NotesApp.Show;
})