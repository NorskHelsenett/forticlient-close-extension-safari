# forticlient-close-extension-safari

Extension for automagically closing forticlient callback tab for safari

# Test

- Open safari
- Go to settings
- Open tab "Developer"
- Enable "Allow unsigned extensions"
- Activate with your thumb or password
- Download the extension app `<repo root>/dist/NHN FortiClient tab close extension.zip`
- Unzip the \*.zip file
- Open the \*.app file
- The app displays that you need to activate the extension
  - Press the "Quit and Open Safari settings"
- Activate "NHN FortiClient closer" Extention under Safari->Settings->Extensions
- verify with your thumb or password
- volia, the extension is installed

# Build

- `npm install`
- `npm run build`
- (or with watch `npm run build:watch`)
- Open Xcode.app
- Open this xcode project file
- Build/run in xcode

# Run a mock version of forticlient page:

- `npm run serve:forti`
- Open http://127.0.0.1:8020 in your favorite browser

# This project is converted from another firefox web extension

Command:

`xcrun /Applications/Xcode.app/Contents/Developer/usr/bin/safari-web-extension-converter --app-name "NHN FortiClient tab close extension" --swift --copy-resources  --project-location ./forticlient-close-extension-safari --macos-only --bundle-identifier no.nhn.forticlienttabclose  forticlient-close-extension-firefox/dist`

#
