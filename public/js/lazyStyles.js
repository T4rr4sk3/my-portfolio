(function() {
    var preGoogleAPIs = document.createElement('link');
    preGoogleAPIs.href = 'https://fonts.googleapis.com';
    preGoogleAPIs.rel = 'preconnect';

    var preGStatic = document.createElement('link');
    preGStatic.href = 'https://fonts.gstatic.com';
    preGStatic.rel = 'preconnect';

    var googleFonts = document.createElement('link');
    googleFonts.href = 'https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&family=Inter:wght@400;500;600;700&display=swap';
    googleFonts.rel = 'stylesheet';
    googleFonts.type = 'text/css';

    document.getElementsByTagName('head')[0].appendChild(preGoogleAPIs)
    document.getElementsByTagName('head')[0].appendChild(preGStatic)
    document.getElementsByTagName('head')[0].appendChild(googleFonts)

    // <link rel="preconnect" href="https://fonts.googleapis.com" />
    // <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    // <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@500&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
})()