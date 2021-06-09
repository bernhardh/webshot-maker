# Webshot Maker

This node scripts allow you to create Screenshots from a webpage.

## Installation

```
npm install
```

## Usage

### Create a single screenshot

The most basic commandline calling the `webshot.js` script with the parameter `-u $URL`. Example:

```shell
# Just create a screenshot from wikipedia.org
node webshot.js -u https://www.wikipedia.org
```

You can provide a couple of params to the command:

```shell
# Create a screenshot with a render delay of 1500ms and with a size of 1080x2340
node webshot.js -u https://www.wikipedia.org --renderDelay=1500 --width=1080 --height=2340
```

### Create a full set of screenshots in different standard sizes

There is an additional script which will generate multiple images from your our in various default sizes plus a couple 
of "framed" versions, which means the screenshot will be shown inside a device mockup frame.

```shell
node webshot-multi.js https://www.wikipedia.org
```

You can also provide a prefix for the newly generated files:

```shell
node webshot-multi.js https://www.wikipedia.org my_prefix
```

