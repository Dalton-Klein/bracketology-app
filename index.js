const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3010;
const router = require('./router');
const db = require('./models/index');
const http = require('http').createServer(app);
router.use(express.json());
app.use(cors(), router);

app.use(express.static(__dirname + '/client/bracketology-app/dist/bracketology-app'))
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/client/bracketology-app/dist/bracketology-app/index.html'));
});

(async () => {
  try {
    // await db.sequelize.sync({ force: true });
    await db.sequelize.sync();
    http.listen(process.env.PORT || PORT);
    console.log(`🌈Conected to DB, Server listening on port ${PORT}🌈`); // eslint-disable-line no-console
  } catch (e) {
    console.error('☹️Error connecting to the db ☹️ ', e); // eslint-disable-line no-console
  }
})();