define(
	[
		'emberjs',
		'Library/jquery-with-dependencies',
		'Content/Inspector/Editors/AssetEditor',
		'text!./SpecificAssetEditor.html'
	],
	function(Ember, $, AssetEditor, template) {

		return AssetEditor.extend({
			template: Ember.Handlebars.compile(template),
			_initializeUploader: function() {
				this._super();

				this._uploader.bind('BeforeUpload', function(uploader, file) {
					uploader.settings.multipart_params['asset[resource][__collectionName]'] = 'protectedPersistent';
				});
			}
		});
	});
