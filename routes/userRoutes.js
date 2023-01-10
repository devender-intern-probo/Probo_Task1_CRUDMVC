module.exports = app => {
    const users = require("../controllers/userController.js");
  
    // Create a new user
    app.post("/users", users.create);
  
    // Retrieve all users
    app.get("/users", users.findAll);
  
    // Update a user with userId
    app.put("/users/:ID", users.update);
  
    // Delete a user with userId
    app.delete("/users/:ID", users.delete);
  
  };