const { Pool } = require('pg');
const dht = require('node-dht-sensor');
const winston = require('winston');
require('dotenv').config();

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston.format.json()),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: `${process.cwd()}/log/readings.log`,
    }),
  ],
});

module.exports = logger;

const pool = new Pool({ ssl: true });

const app = {
  units: [
    {
      name: process.env.UNITNAME,
      type: process.env.UNITTYPE,
      pin: process.env.UNITPIN,
    },
  ],

  start () {
    setInterval(() => {
      const readings = app.read();
      this.record(readings);
    }, process.env.UPDATEFREQ);
  },

  read () {
    const results = this.units.map((sensor) => {
      const reading = dht.read(sensor.type, sensor.pin);
      return {
        sensor: sensor.name,
        temperature: reading.temperature.toFixed(2),
        humidity: reading.humidity.toFixed(2),
      };
    });
    return results;
  },

  record (readings) {
    readings.forEach((values) => {
      try {
        pool.query('INSERT INTO recordings(sensor, timestamp, temperature, humidity) VALUES ($1, now(), $2, $3)', [
          values.sensor,
          values.temperature,
          values.humidity,
        ]);
      } catch (reason) {
        logger.warn(reason);
      }
    });
  },
};

app.start();
