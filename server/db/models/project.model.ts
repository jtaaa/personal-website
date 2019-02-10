import db from './../mongoose';
import ProjectSchema from './../schema/project/project.schema';

const ProjectModel = db.model('project', ProjectSchema);

export { ProjectModel };
