chrome.app.runtime.onLaunched.addListener(function () {
    chrome.app.window.create('main.html', {
        'state': 'fullscreen',
        'innerBounds': {
            'width': 1920,
            'height': 1080
        }
    });
});