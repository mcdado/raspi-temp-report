const dht = require('node-dht-sensor');

const app = {
  units: [
    {
      name: 'Unit #1',
      type: 22,
      pin: 4,
    },
  ],

  start () {
    setInterval(() => {
      const readings = app.read();
      this.log(readings);
    }, 10000);
  },

  read () {
    const results = this.units.map((sensor) => {
      const reading = dht.read(sensor.type, sensor.pin);
      return {
        sensor: sensor.name,
        temperature: reading.temperature.toFixed(1),
        humidity: reading.humidity.toFixed(1),
      };
    });
    return results;
  },

  log (readings) {
    readings.forEach((values) => {
      console.log(`${values.sensor}: ${values.temperature}°C, ${values.humidity}%`);
    });
  }
};

app.start();
