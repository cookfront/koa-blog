// This file configures a web server for testing the production build
// on your local machine.

import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';

// Run Browsersync
browserSync({
    proxy: 'http://localhost:8888',

    files: [
        'public/build/*.html'
    ],

    middleware: [historyApiFallback()]
});
