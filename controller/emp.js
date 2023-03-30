const Emp = require('../models/emp')
const mongoose = require('mongoose')

function create(req,res, next){
    let empName = req.body.empName;
    let empEmail = req.body.empEmail;
    let empId = req.body.empId;

    let emp = new Emp({
        empName,
        empEmail,
        empId
    })
    emp.save().then((data) => {
        res.send(data)
    })
}
function view(req,res, next){
    Emp.find({}).then((data) => {
        res.send(data)
    })
}
function update(req, res, next){
    Emp.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "no user found",
        });
      }
      res.status(200).send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: "error while updating the post",
      });
    });
}
function remove(req,res, next) {
    Emp.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: "User not found ",
        });
      }
      res.send({ message: "User deleted successfully!" });
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Could not delete user ",
      });
    });
}

module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove