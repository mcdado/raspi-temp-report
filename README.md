# Temperature Monitor

This is a simple Node.js app to collect ambient data using a DHT22/AM2302 sensor attached to
a Raspberry Pi and send it to a datastore (under development, ideally PostgreSQL).

## Requirements

- [Buy a Raspberry Pi](https://www.raspberrypi.org/products/)
- [Buy a DHT22/AM2302 sensor](http://amzn.eu/cd9SmgL)
- Wire the sensor (instructions to follow)
- [Install Node.js](https://github.com/nodesource/distributions#installation-instructions)
- This app uses [bcm2835](http://www.airspayce.com/mikem/bcm2835/) (installed during setup)

## Installation

Open an SSH session on your Raspberry Pi, then type the following commands:

```
git clone https://github.com/mcdado/raspi-temp-report.git # to run on the Pi
cd raspi-temp-report # to run on the Pi
npm run setup # to run on the Pi
```

Alternatively, you can checkout the project locally on your coding machine, and use the `deploy` script.

```
npm run deploy raspberrypi.local # to run on your coding machine
```

You have to change `raspberrypi.local` to whatever hostname you Pi has, or even better to the name of the SSH configuration you might have set up.  
**The deploy script will copy the necessary project files, but will not run the setup on the Pi.**  
You have to run the setup the first time you deploy the app to the Pi.

## Debugging

You can run the app on the Raspberry Pi in debug mode by running with the dedicated npm script:

```
npm run debug
```

Behind the scenes, it will will run `node app.js` with the inspect flag, binded on the Raspberry Pi's IP address and port 9229. Now you can use Visual Studio Code's built-in debugging tools to start a Debug session.
