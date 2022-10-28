const Cert = require('../models/certsModel');


exports.getAllCerts = async (req, res) => {
  console.log('Getting Requested Certs');

  try {
      
    const Certs = await Cert.find();

    res
      .status(200)
      .send(Certs);
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};



exports.createCert = async (req, res) => {
  try {    
console.log(req.body)
    const newCert = await Cert.create(req.body);
    console.log(newCert)
res.send(newCert);
     } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};


exports.deleteCert = async (req, res) => {
  console.log(req.params.id);

  try {
    await Cert.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};


