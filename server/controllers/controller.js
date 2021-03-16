const { WZStatsEntry, Registrations } = require('../models/index');

async function newRegistration (req, res) {
  try {
    console.log('WE GOT TO THE POST CONTROLLER');
    const registration = await Registrations.create({
      username: req.body.username,
      wz_platform: req.body.wz_platform,
      wz_handle: req.body.wz_handle
    });
    res.send(registration);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

async function storeWZStats (req, res) {
  //console.log('what is the express req: ', req);
  try {
    console.log('WE GOT TO THE POST CONTROLLER');
    const wzStatsEntry = await WZStatsEntry.create({
      user: req.body.user,
      wins: req.body.br.wins,
      kills: req.body.br.kills,
      kdRatio: req.body.br.kdRatio,
      downs: req.body.br.downs,
      topTwentyFive: req.body.br.topTwentyFive,
      topTen: req.body.br.topTen,
      contracts: req.body.br.contracts,
      revives: req.body.br.revives,
      topFive: req.body.br.topFive,
      score: req.body.br.score,
      timePlayed: req.body.br.timePlayed,
      gamesPlayed: req.body.br.gamesPlayed,
      scorePerMinute: req.body.br.scorePerMinute,
      deaths: req.body.br.deaths
    });
    res.send(wzStatsEntry);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}


module.exports = {newRegistration, storeWZStats};
