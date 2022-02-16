import { userById, userBySeq, createUser, updateUser, deleteUser } from "../data/users";
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
import { commentByIssueSeq, createComment, updateComment, deleteComment } from "../data/comments";
export const rootValue = {
   ////User 관련 query, mutation
   userById: async ({ id }) => (await userById(id))[0],
   userBySeq: async ({ seq }) => (await userBySeq(seq))[0],
   createUser: async ({ user }) => await createUser(user),
   updateUser: async ({ seq, user }) => await updateUser(seq, user),
   deleteUser: async ({ seq }) => await deleteUser(seq),
   ////Project 관련 query, mutation
   projectsAll: async () => await projectsAll(),
   projectBySeq: async ({ seq }) => (await projectBySeq(seq))[0],
   createProject: async ({ project }) => await createProject(project),
   updateProject: async ({ seq, project }) => await updateProject(seq, project),
   deleteProject: async ({ seq }) => await deleteProject(seq),
   ////Issue 관련 query, mutation
   issuesByAsigneeSeq: async ({ asignee_seq }) => await issuesByAsigneeSeq(asignee_seq),
   issuesByReporterSeq: async ({ reporter_seq }) => await issuesByReporterSeq(reporter_seq),
   issuesByProjectSeq: async ({ project_seq }) => await issuesByProjectSeq(project_seq),
   issueById: async ({ id }) => (await issueById(id))[0],
   createIssue: async ({ issue }) => await createIssue(issue),
   updateIssue: async ({ seq, issue }) => await updateIssue(seq, issue),
   deleteIssue: async ({ seq }) => await deleteIssue(seq),

   //commentByIssueSeq: ({ issueseq }) => commentByIssueSeq(issueseq),

   /*
  createComment: ({ comment }) => createComment(comment),
  updateComment: ({ comment }) => updateComment(comment),
  deleteComment: ({ comment }) => deleteComment(comment),
  */
};
