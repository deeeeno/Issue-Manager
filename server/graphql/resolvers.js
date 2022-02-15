import {userById,userBySeq} from '../data/users';
import {issueById,issuesByAsigneeSeq,issuesByReporterSeq,createIssue} from '../data/issues';
import {projectsAll,getProjectBySeq} from '../data/projects';
import {commentByIssueSeq} from '../data/comments';
export const rootValue = {
    userById: ({id}) => userById(id),
    userBySeq: ({seq}) => userBySeq(seq),
    issuesByAsigneeSeq: ({asignee_seq}) => issuesByAsigneeSeq(asignee_seq),
    issuesByReporterSeq: ({reporter_seq}) => issuesByReporterSeq(reporter_seq),
    issueById: ({id}) => issueById(id),
    projectsAll: () => projectsAll(),
    projectBySeq: ({seq}) => projectBySeq(seq),
    commentByIssueSeq: ({issueseq}) => commentByIssueSeq(issueseq),
    createUser:({user}) => createUser(user),
    updateUser:({user}) => updateUser(user),
    deleteUser:({user}) => deleteUser(user),
    createProject:({project}) => createProject(project),
    updateProject:({project}) => updateProject(project),
    deleteProject:({project}) => deleteProject(project),
    createIssue:({issue}) => createIssue(issue),
    updateIssue:({issue}) => updateIssue(issue),
    deleteIssue:({issue}) => deleteIssue(issue),
    createComment:({comment}) => createComment(comment),
    updateComment:({comment}) => updateComment(comment),
    deleteComment:({comment}) => deleteComment(comment),
}
