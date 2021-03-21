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
    const { scores, participants } = req.body;
    const filter = { where: { id: id } };
    const reply = await BracketMaster.findOne(filter);
    if (reply) {
      reply.update({
        scores,
        participants
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
    console.log('WE GOT TO THE CONTROLLER', req.body);
    const { masterId, prelim, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
      m11, m12, m13, m14, m15, m16, m17, m18, m19, m20,
      m21, m22, m23, m24, m25, m26, m27, m28, m29, m30, m31
    } = req.body
    const entry = await BracketEntry.create({
      username: req.body.username,
      masterId,
      picks: [
        prelim, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10,
        m11, m12, m13, m14, m15, m16, m17, m18, m19, m20,
        m21, m22, m23, m24, m25, m26, m27, m28, m29, m30, m31
      ]
    });
    res.send(entry);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

const fetchEntries = async (req, res) => {
  try {
    console.log('Someone Requested Entries!');
    const reply = await BracketEntry.findAll();
    res.status(200).send(reply);
  } catch (err) {
    console.log('FETCH ERROR', err);
    res.status(500).send('FETCH ERROR');
  }
};


module.exports = { newBracket, editBracket, fetchBracket, newEntry, fetchEntries};
