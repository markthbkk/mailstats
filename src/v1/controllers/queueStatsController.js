const QueueStat = require('../models/queueStatsModel');


exports.getAllQueueStats = async (req, res) => {
  console.log('Getting Requested queueStats');

  try {

     const queueStats = await QueueStat.find();

    console.log('done')

    res.status(200).send(queueStats);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};



