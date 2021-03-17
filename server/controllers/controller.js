const { BracketMaster, BracketEntry } = require('../models/index');

async function newBracket (req, res) {
  try {
    console.log('WE GOT TO THE CONTROLLER');
    const entry = await BracketMaster.create({
      bracketname: req.body.bracketname,
      numMatches: req.body.numMatches,
      participants: req.body.participants
    });
    res.send(entry);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const editBracket = async (req, res) => {
  try {
    console.log('Someone Updated Bracket!');
    const { id } = req.params;
    const { scores } = req.body;
    const filter = { where: { id: id } };
    const reply = await BracketMaster.findOne(filter);
    if (reply) {
      reply.update({
        scores
      })
    }
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};

const fetchBracket = async (req, res) => {
  try {
    console.log('Someone Requested Master Bracket!');
    const { id } = req.params;
    const filter = { where: { id: id } };
    const reply = await BracketMaster.findOne(filter);
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};

async function newEntry (req, res) {
  try {
    console.log('WE GOT TO THE CONTROLLER');
    const entry = await BracketEntry.create({
      username: req.body.username,
      picks: req.body.picks
    });
    res.send(entry);
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


module.exports = { newBracket, editBracket, fetchBracket, newEntry, storeWZStats};
