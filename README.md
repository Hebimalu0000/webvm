# WebVM

This repository hosts the source code of the [https://webvm.io](https://webvm.io) live demo page.

WebVM is a server-less virtual environment running fully client-side in HTML5/WebAssembly. It's designed to be Linux ABI-compatible. In this demo, it runs an unmodified Debian distribution including many native development toolchains.

WebVM is powered by the CheerpX virtualization engine, and enables safe, sandboxed client-side execution of x86 binaries on any browser. CheerpX includes an x86-to-WebAssembly JIT compiler, a virtual block-based file system, and a Linux syscall emulator. 

For more information: https://medium.com/leaningtech/webvm-client-side-x86-virtual-machines-in-the-browser-40a60170b361

# Enable Networking

- Click "Tailscale Login" in the top right corner.
- Log in to Tailscale (create an accout if you don't have one)
- If you want to access the public internet, you need an Exit Node. See here for how to set one up. If you just want to access a machine in your Tailscale Network, you don't need it.
- Depending on your network speed, you may need to wait a few moments for the Tailscale Wasm module to be downloaded.
- Log in with your Tailscale credentials.
- Go back to the WebVM tab. You will see your IP address in the top right.
- Start firing network requests!

Given the short-lived nature of WebVM, we log into Tailscale as an Ephemeral Node. This means that the node will disappear from your Tailscale Network after a period of inactivity. It also means that when you reload the tab, you need to log in again. It should be faster the second time.

# Bugs and Issues

Please use [Issues](github.com/webvm/issues) to report any bug.

## Browsers support

|![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)<br>Chrome|![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png)<br>Edge|![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png)<br>Safari|![](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)<br>Firefox|
|:---:|:---:|:---:|:---:|
|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|:heavy_check_mark:|

WebVM and CheerpX are compatible with any browser, both on Desktop (Chrome/Chromium, Edge, Firefox, Safari), and Mobile (Chrome, Safari), provided support for [SAB](https://medium.com/r?url=https%3A%2F%2Fcaniuse.com%2F%3Fsearch%3DSharedArrayBuffer) is present, and the device has sufficient memory.

# Other 

This project depends on xterm.js (https://xtermjs.org/) and on its add-on xterm-addon-fit

To update the xterm-related files do:
```
mkdir build
cd build
npm install --save xterm
npm install --save xterm-addon-fit
cd ../xterm
cp ../build/node_modules/xterm/lib/xterm.js .
cp ../build/node_modules/xterm/css/xterm.css .
cp ../build/node_modules/xterm-addon-fit/lib/xterm-addon-fit.js .
cd ..
rm -r build
```

# License
Copyright (c) Leaning Technologies Limited. All rights reserved.
