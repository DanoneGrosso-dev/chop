const express = require('express');
const cors = require('cors');

const log = require('./config/log');
const cache = require('./services/cache/cache');
const events = require('./events');
const guildRelay = require('./services/guild');

const port = process.env.PORT || 3000;

module.exports = () => {
  const app = express();

  app.use(cors());

  app.get('/commands', (req, res) => {
    cache.client
      .get('commands')
      .then((data) => {
        if (data) {
          // eslint-disable-next-line global-require
          const { version } = require('../package.json');
          res.status(200).json({ commands: JSON.parse(data), version });
        } else {
          res.status(500).json({ message: 'Could not find resource.' });
        }
      })
      .catch((err) => {
        res.status(500).json({ message: 'Something went wrong, please try again later.' });
      });
  });

  app.get('*', (req, res) => {
    res.send("It's coffee time!");
  });

  const server = app.listen(port, () => {
    events.on('kill', () => {
      log.info('[Web] Shutting down.');
      server.close();
    });
  });

  guildRelay(server);

  log.info(`[Web] Express server listening at port ${port}.`);
};
