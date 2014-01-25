define([
	"app",
	'text!apps/notes/list/templates/layout.html',
	'text!apps/notes/list/templates/note.html',
], function(HT, LayoutTemplate, NoteTemplate){

	HT.module("NotesApp.List", function(View, HT, Backbone, Marionette, $, _){

		View.Layout = Marionette.Layout.extend({
			template: LayoutTemplate,
			triggers: {
				'click [data-action="new"]': 'notes:new'
			},
			regions: {
				notesRegion: "#notes-region"
			},

		});

		View.Note = Marionette.ItemView.extend({
			className: 'note-wrapper',
			template: NoteTemplate,
			triggers: {
				'click': "show:details"
			},
			modelEvents: {
				'change': 'render'
			}
		});

		View.Notes = Marionette.CollectionView.extend({
			// className: 'row',
			itemView: View.Note
		});

	});

	return HT.NotesApp.List;
});