const express = require('express');
const app = express();
const PORT = 3010;
const router = require('./router');
router.use(express.json());
const db = require('./models/index');
const http = require('http').createServer(app);
app.use(router);

(async () => {
  try {
    // await db.sequelize.sync({ force: true });
    await db.sequelize.sync();
    http.listen(PORT);
    console.log(`🌈Conected to DB, Server listening on port ${PORT}🌈`); // eslint-disable-line no-console
  } catch (e) {
    console.error('☹️Error connecting to the db ☹️ ', e); // eslint-disable-line no-console
  }
})();