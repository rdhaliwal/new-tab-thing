# New Tab Thing

# Requirements

 - `yarn >1.5.0`
 - Will probably work with other versions, but has only been tested with 1.5.0

# Installation
 - Clone this repo
   - For examples sake, let's say it's cloned in `~/workspace/new-tab-thing`
 - Run `yarn install`
 - Run `yarn build`
 - Go to `chrome://extensions/` (Only tested in Chrome)
 - Enable developer mode in the top right
 - Select `load unpacked`
 - Select the `~/workspace/new-tab-thing/build` folder
 - Open a new tab, et voila, it should be replaced with this extension

## Customizing

 - Edit any files
   - If you simply want to edit links, just edit `src/config.json`
 - Run `yarn start` and go to `localhost:3000` to preview your changes
 - Once your happy with it, rerun `yarn build` and it will be 'installed' into your new tab

