const express = require('express');
const certsController = require('../controllers/certsController');

const router = express.Router();

router
  .route('/api/v1/certs')
  .get(certsController.getAllCerts)
  .post(certsController.createCert);

// router
//   .route('/api/v1/todos/add')
//   .get(requiresAuth(), todoController.createTodoTemplate)
//   .post(requiresAuth(), todoController.createTodo);

// router
//   .route('/api/v1/todos/customers')
//   .get(requiresAuth(), customerController.getAllCustomers)
//   .post(requiresAuth(), customerController.createCustomer);

// router
//   .route('/api/v1/todos/customers/add')
//   .get(requiresAuth(), customerController.addCustomer);

// router
//   .route('/api/v1/todos/customers/:id')
//   .delete(requiresAuth(), customerController.deleteCustomer);

router
  .route('/api/v1/todos/:id')
  .delete(certsController.deleteCert);

module.exports = router;
