const express = require('express');
const app = express();
const port = 3010;
const router = require('./router');
router.use(express.json());
const db = require('./models/index');
app.use(router);

(async function bootstrap () {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync(); // {force:true}
    app.listen(port, () => console.log(`✨ Express Server running on port: ${port} ✨`));
    console.log('🌈 MySQL Database is connected 🌈');
  } catch (error) {
    console.log('☹️ Error connecting to DB ☹️',error);
  }
})();
