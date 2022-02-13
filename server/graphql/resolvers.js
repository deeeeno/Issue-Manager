import {userById,userBySeq} from '../data/users';
import {issueById,issueByUserSeq,createIssue} from '../data/issues';
import {getProjectAll,getProjectBySeq} from '../data/projects';
import {commentByIssueSeq} from '../data/comments';
export const rootValue = {
    userById: ({id},context) => userById(id,context),
    userBySeq: ({seq}) => userBySeq(seq),
    issueById: ({id}) => issueById(id),
    issueByUserSeq: ({userseq}) => issueByUserSeq(userseq),
    getProjectAll: () => getProjectAll(),
    getProjectBySeq: ({seq}) => getProjectBySeq(seq),
    commentByIssueSeq: ({issueseq}) => commentByIssueSeq(issueseq),
    createIssue:({issue}) => createIssue(issue)
}
