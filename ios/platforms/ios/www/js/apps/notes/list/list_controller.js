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

				this.listenTo(this.layout, "notes:new", this.openCamera);

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
			},

			openCamera: function(){
				navigator.camera.getPicture( this.cameraSuccess, this.cameraError, {} );
			},

			cameraSuccess: function(image){
				var options = new FileUploadOptions();

				var params = {
					userId: '1234'
					//userid
				};

				options.params = params;

				var ft = new FileTransfer();
				ft.upload(image, 'http://api.gonoteable.com/uploads', this.uploadSuccess, this.uploadError)
			},

			cameraError: function(message){
				alert(message);
			},

			uploadSuccess: function(resp){

			},

			uploadError: function(error){

			},
		});

	});

	return HT.NotesApp.List;
});