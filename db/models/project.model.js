const db = require('./../mongoose');
const ProjectSchema = require('./../schema/project/project.schema');

const ProjectModel = db.model('project', ProjectSchema);

module.exports = ProjectModel;
