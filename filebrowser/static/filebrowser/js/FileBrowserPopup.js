function FileBrowserPopup(callback, value, type) {
    var fbURL = '/admin/filebrowser/browse/?pop=5';
    fbURL = fbURL + "&type=" + type.filetype;
    if(value)
        fbURL += '&input=';
    const instanceApi = tinyMCE.activeEditor.windowManager.openUrl({
        title: 'Filebrowser image/media/file picker',
        url: fbURL,
        width: 850,
        height: 500,
        onMessage: function(dialogApi, details) {
            callback(details.content);
            instanceApi.close();
        }
    });
    return false;
}