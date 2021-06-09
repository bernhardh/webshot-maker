// Run as node webshot-multi.js wikipedia.org
const runScript = require('./src/runscript'),
    url = process.argv[2],
    prefix = (process.argv[3] ? process.argv[3] + "_" : "").trim();
const shots = [
    [
        '-o ' + prefix + 'desktop-xl-1920x1080.png',
        '--width=1920',
        '--height=1080',
        '--renderDelay=2000',
    ],
    [
        '-o ' + prefix + 'tablet-portrait-768x1024.png',
        '--width=768',
        '--height=1024',
        '--renderDelay=2000',
    ],
    [
        '-o ' + prefix + 'tablet-landscape-1024x768.png',
        '--width=1024',
        '--height=768',
        '--renderDelay=2000',
    ],
    [
        '-o ' + prefix + 'iphone12-390x844.png',
        '--width=390',
        '--height=844',
        '--renderDelay=2000',
    ],
    [
        '-o ' + prefix + 'pixel5-393x851.png',
        '--width=393',
        '--height=851',
        '--renderDelay=2000',
    ],
    [
        '-o ' + prefix + 'pixel5-zoomed-1080x2340.png',
        '--width=1080',
        '--height=2340',
        '--renderDelay=2000',
        '--zoom=2.7481',
    ],
    [
        '-o ' + prefix + 'iphone-12-framed-900x415.png',
        '--width=415',
        '--height=900',
        '--renderDelay=2000',
    ]
];

console.log("Generating multiple screenshots for url " + url);

for(var i in shots) {
    var shot = shots[i];
    shot.push('-u ' + url);

    // Now we can run a script and invoke a callback when complete, e.g.
    runScript.run('./webshot.js', shot, function (err) {
        if (err) throw err;
    });
}
