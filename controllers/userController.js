const User = require("../models/usersModel.js");

// Create and Save a new employee
exports.create = (req, res) => {
  try {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }

    // Create a user
    const user = new User(req.body);

    // Save User in the database
    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Retrieve all employees from the database.
exports.findAll = (req, res) => {
  try {
    User.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving employees.",
        });
      else res.send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Update an user identified by the userId in the request
exports.update = (req, res) => {
  try {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
    }

    User.updateById(req.params.ID, new User(req.body), (err, data) => {
      console.log(err);
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`,
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.userId,
          });
        }
      } else res.send(data);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Delete an user with the specified userId in the request
exports.delete = (req, res) => {
  try {
    User.remove(req.params.ID, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.userId}.`,
          });
        } else {
          res.status(500).send({
            message: "Could not delete User with id " + req.params.userId,
          });
        }
      } else res.send({ message: `User was deleted successfully!` });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
