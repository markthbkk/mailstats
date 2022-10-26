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

// exports.getTodo = async (req, res) => {
//   try {
//     const todo = await Todo.findById(req.params.id);

//     const customers = await Customer.find();
//     let customersArray = customers.filter(
//       (el) => el.customer !== todo.customer
//     );
//     customersArray.unshift({ customer: todo.customer });

//     console.log(customersArray);

//     console.log(todo);

//     res.render('createEditTodo', {
//       layout: 'createEditMain',
//       documentTitle: todo.title,
//       customers: customersArray,
//       description: todo.description,
//       created: new Date(todo.created).toLocaleString().replace(',', ''),
//       documentID: todo._id,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

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

// exports.updateTodo = async (req, res) => {
//   console.log(req.body);

//   try {
//     const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     // const newDesc = todo.description
//     //   .replaceAll('\r\n\r\n', '<br>')
//     //   .replaceAll('\r\n', '<br>');

//     // console.log(newDesc);

//     // const updatedDesc = insertHREF(newDesc);

//     // console.log(updatedDesc);

//     res.render('showSingleTodo', {
//       layout: 'main',
//       title: todo.title,
//       customer: todo.customer,
//       description: todo.description,
//       created: new Date(todo.created).toLocaleString().replace(',', ''),
//       documentID: todo._id,
//     });
//   } catch (err) {
//     res.status(400).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };

exports.deleteCert = async (req, res) => {
  console.log(req.body.id);

  try {
    await Cert.findByIdAndDelete(req.body.id);

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

// exports.createTodoTemplate = async (req, res) => {
//   console.log('STARTING');
//   try {
//     const customersArray = await Customer.find();

//     console.log(customersArray);

//     res.render('createEditTodo', {
//       layout: 'createEditMain',
//       customers: customersArray,
//     });
//   } catch (err) {
//     res.status(404).json({
//       status: 'fail',
//       message: err,
//     });
//   }
// };
