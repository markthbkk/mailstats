const DiskStat = require('../models/diskStatsModel');


exports.getAllDiskStats = async (req, res) => {
  console.log('Getting Requested diskStats');

  try {

     const diskStats = await DiskStat.find();

    console.log('done')

    res.status(200).send(diskStats);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};



