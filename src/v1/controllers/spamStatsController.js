const SpamStat = require('../models/spamStatsModel');


exports.getAllSpamStats = async (req, res) => {
  console.log('Getting Requested spamStats');

  try {

     const spamStats = await SpamStat.find();

    console.log('done')

    res.status(200).send(spamStats);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};



