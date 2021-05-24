const ProjectController = require("../controllers/project.controller")

module.exports = app =>{
    app.get("/api/projects", ProjectController.findAllProjects);
    app.get("/api/projects/:status", ProjectController.findByStatus);
    app.post("/api/projects/new", ProjectController.createProject);
    app.put("/api/projects/update/:id", ProjectController.updatePrject);
    app.delete("/api/projects/delete/:id", ProjectController.delete);
}