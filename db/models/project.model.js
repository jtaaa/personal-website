const db = require('./../mongoose');
const ProjectSchema = require('./../schema/splash.schema');

const ProjectModel = db.model('project', ProjectSchema);

module.exports = ProjectModel;
