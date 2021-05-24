const Project = require("../models/project.model")

//find all
module.exports.findAllProjects=(req,res)=>{
    Project.find()
    .then(allProjects => res.json({projects: allProjects}))
    .catch(err => res.json({message: "something went wrong when finding all projectss", error: err}))
}
//find one
module.exports.findProject = (req, res) =>{
    Project.findById(req.params.id)
    .then(project => res.json({project: project}))
    .catch(err => res.json({message: "something went wrong with finding one project ", error: err}))
}
//find special
module.exports.findByStatus =(req, res)=>{
    Project.find({status: req.params.status})
    .sort({
        dueDate:1
    })
    .then(projects => res.json({projects: projects}))
    .catch(err => res.json({message: "something went wrong when finding projects", error: err}))
}
//create
module.exports.createProject = (req, res) => {
    Project.create(req.body)
    .then(newProject=>res.json({project: newProject}))
    .catch(err => res.json({mesage: "something went wrong with adding a project", error: err}))
}
//update one
module.exports.updatePrject = (req,res) =>{
    Project.updateOne({_id: req.params.id}, req.body,{runValidators: true})
    .then(project => res.json({project: project}))
    .catch(err => res.json({message: "something went wrong with updating the project",rror: err}))
}
//delete one
module.exports.delete=(req,res)=>{
    Project.deleteOne({_id: req.params.id})
    .then(res.json({message: "project was deleted"}))
    .catch(err => res.json({message: "something went wrong when deleteing project", error: err}))
}



