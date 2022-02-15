import {
  userById,
  userBySeq,
  createUser,
  updateUser,
  deleteUser,
} from "../data/users";
import {
  issueById,
  issuesByAsigneeSeq,
  issuesByReporterSeq,
  issuesByProjectSeq,
  createIssue,
  updateIssue,
  deleteIssue,
} from "../data/issues";
import {
  projectsAll,
  projectBySeq,
  createProject,
  updateProject,
  deleteProject,
} from "../data/projects";
import {
  commentByIssueSeq,
  createComment,
  updateComment,
  deleteComment,
} from "../data/comments";
export const rootValue = {
  userById: async ({ id }) => (await userById(id))[0],
  userBySeq: async ({ seq }) => (await userBySeq(seq))[0],
  issuesByAsigneeSeq: ({ asignee_seq }) => issuesByAsigneeSeq(asignee_seq),
  issuesByReporterSeq: ({ reporter_seq }) => issuesByReporterSeq(reporter_seq),
  issuesByProjectSeq: ({ project_seq }) => issuesByProjectSeq(project_seq),
  issueById: ({ id }) => issueById(id),
  projectsAll: () => projectsAll(),
  projectBySeq: ({ seq }) => projectBySeq(seq),
  //commentByIssueSeq: ({ issueseq }) => commentByIssueSeq(issueseq),
  createUser: ({ user }) => createUser(user),
  updateUser: ({ user }) => updateUser(user),
  deleteUser: ({ seq }) => deleteUser(seq),
  //createProject: ({ project }) => createProject(project),
  //updateProject: ({ project }) => updateProject(project),
  //deleteProject: ({ seq }) => deleteProject(seq),
  createIssue: ({ issue }) => createIssue(issue),
  updateIssue: ({ issue }) => updateIssue(issue),
  deleteIssue: ({ seq }) => deleteIssue(seq),
  /*
  createComment: ({ comment }) => createComment(comment),
  updateComment: ({ comment }) => updateComment(comment),
  deleteComment: ({ comment }) => deleteComment(comment),
  */
};
