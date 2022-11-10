const SpamStat = require('../models/spamStatsModel');


exports.getAllSpamStats = async (req, res) => {
  console.log('Getting Requested spamStats');

  try {

    console.log(req.query)

    const selectedDate = req.query.date

    const spamStats = await SpamStat.find({ date: selectedDate });
    
    const spamStatsSorted = spamStats.sort(
      (objA, objB) =>
        Number(new Date(objB.messageCount)) -
        Number(new Date(objA.messageCount))
    );

    res.status(200).send(spamStatsSorted);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};


