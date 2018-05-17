# Temperature Monitor

This is a simple Node.js app to collect ambient data using a DHT22/AM2302 sensor attached to
a Raspberry Pi and send it to a datastore (initally a Google Sheet).

## Requirements

- [Buy a Raspberry Pi](https://www.raspberrypi.org/products/)
- [Buy a DHT22/AM2302 sensor](http://amzn.eu/cd9SmgL)
- Wire the sensor (instructions to follow)
- [Install Node.js](https://github.com/nodesource/distributions#installation-instructions)
- This app uses [bcm2835](http://www.airspayce.com/mikem/bcm2835/) (installed during setup)

## Installation
```
git clone https://github.com/mcdado/raspi-temp-report.git
cd raspi-temp-report
./setup.sh
```
