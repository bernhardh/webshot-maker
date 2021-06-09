// Run with node webshot-framed.js

const runScript = require('./src/runscript'),
    fs = require('fs'),
    images = require("images"),
    url = (process.argv[2] ? process.argv[2] : '').trim(),
    prefix = (process.argv[3] ? process.argv[3] + '_' : '').trim(),
    empty = images("./frames/empty.png");

const framed = [
    {
        frame: "iphone12.png",
        x: 113,
        y: 40,
        width: 415,
        height: 900
    },
    {
        frame: "generic.png",
        x: 135,
        y: 113,
        width: 370,
        height: 810
    }
]

for(var i in framed) {
    const frame = framed[i],
        targetFilename = prefix  + "framed_" + frame.frame,
        tmpFilename = 'tmp_' + targetFilename

        // create screenshot
    runScript.run('./webshot.js', [
        '-u ' + url,
        '-o ' + tmpFilename,
        '--width=' + frame.width,
        '--height=' + frame.height,
    ], function(){
        empty.draw(images("./out/" + tmpFilename), frame.x, frame.y)
            .draw(images("./frames/" + frame.frame), 0, 0)
            .save("./out/" + targetFilename);

        // Delete tmp file
        fs.unlinkSync('./out/' + tmpFilename)

        console.log("Created framed file " + targetFilename);
    })

}
