const ServiceStat = require('../models/serviceStatsModel');


exports.getAllServiceStats = async (req, res) => {
  console.log('Getting Requested serviceStats');

  try {

     const serviceStats = await ServiceStat.find();

    console.log('done')

    res.status(200).send(serviceStats);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};



