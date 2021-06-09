// Run with node webshot.js

// See https://www.npmjs.com/package/webshot-node
const webshot = require('webshot-node');
const yargs = require('yargs');
const argv = yargs
    .command('webshot', 'Erzeugt einen Screenshot einer Webseite')
    .option('url', {
        alias: 'u',
        description: 'The url of the site',
        type: 'string',
    })
    .option('width', {
        description: 'The width of the browser-window',
        type: 'string',
        default: 1024
    })
    .option('height', {
        description: 'The height of the browser-window',
        type: 'string',
        default: 768
    })
    .option('shotWidth', {
        description: 'The width of the screenshot',
        type: 'string',
        default: 'window'
    })
    .option('shotHeight', {
        description: 'The height of the screenshot',
        type: 'string',
        default: 'window'
    })
    .option('renderDelay', {
        description: 'Number of milliseconds to wait after a page loads before taking the screenshot. (for example because of JS scripts)',
        type: 'int',
        default: 0
    })
    .option('quality', {
        description: 'JPEG compression quality. A higher number will look better, but creates a larger file. Quality setting has no effect when streaming.',
        type: 'int',
        default: 75
    })
    .option('zoom', {
        description: 'Zoom-Factor',
        type: 'float',
        default: 1.0
    })
    .option('output', {
        description: 'The name of the output file',
        alias: 'o',
        type: 'string',
        default: 'result.png'
    })
    .help()
    .alias('help', 'h')
    .argv;

// See more options at https://www.npmjs.com/package/webshot-node#options
const options = {
    /*
     * The dimensions of the browser window. screenSize is an alias for this property.
     */
    windowSize: {
        width: argv.width,
        height: argv.height
    },
    /*
     * shotSize: The area of the page document, starting at the upper left corner, to render. Possible values are 'screen', 'all', and a number defining a pixel length.
     * - 'window' causes the length to be set to the length of the window (i.e. the shot displays what is initially visible within the browser window).
     * - 'all' causes the length to be set to the length of the document along the given dimension.
     * - Or the size in pixels
      */
    shotSize: {
        width: argv.shotWidth,
        height: argv.shotHeight
    },
    renderDelay: argv.renderDelay,
    quality: argv.quality,
    zoomFactor: argv.zoom,
//   userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
};

// Output / Url
const url = argv.url.trim(),
    output = './out/' + argv.output.trim()

webshot(url, output, options, function (err) {
    if (err) console.error(err);
    else console.info("Created output file " + output);
});
