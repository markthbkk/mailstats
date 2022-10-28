const express = require('express');
const certsController = require('../controllers/certsController');

const router = express.Router();

router
  .route('/api/v1/certs')
  .get(certsController.getAllCerts)
  .post(certsController.createCert);


router
  .route('/api/v1/certs/:id')
  .delete(certsController.deleteCert);

module.exports = router;
