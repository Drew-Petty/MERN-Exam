const mogoose = require("mongoose")

const ProjectSchema = new mogoose.Schema({
    projectName:{
        type: String,
        required: [true, "project needs a name"],
        minlength: [3, "project name must be at least 3 characters"]
    },
    dueDate:{
        type: Date,
        required: [true, "project needs a due date"]
    },
    status:{
        type: String,
    }
},{timestamps:true})

const Project = mogoose.model("Project",ProjectSchema);
module.exports = Project;
