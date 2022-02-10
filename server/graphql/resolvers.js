import {userById,userBySeq} from '../data/users';
import {issueById,issueByUserSeq,createIssue} from '../data/issues';
import {commentByIssueSeq} from '../data/comments';
export const rootValue = {
    userById: ({id},context) => userById(id,context),
    userBySeq: ({seq}) => userBySeq(seq),
    issueById: ({id}) => issueById(id),
    issueByUserSeq: ({userseq}) => issueByUserSeq(userseq),
    commentByIssueSeq: ({issueseq}) => commentByIssueSeq(issueseq),
    createIssue:({issue}) => createIssue(issue)
    //createIssue:({id,reporter_seq,asignee_seq,status,priority,title,description}) => createIssue(id,reporter_seq,asignee_seq,status,priority,title,description)
}
