import {userById,userBySeq} from '../data/users';
import {issueById,issueByUserSeq} from '../data/issues';
import {commentByIssueSeq} from '../data/comments';
export const rootValue = {
    userById: ({id},context) => userById(id,context),
    userBySeq: ({seq}) => userBySeq(seq),
    issueById: ({id}) => issueById(id),
    issueByUserSeq: ({seq}) => issueByUserSeq(seq),
    commentByIssueSeq: ({iseq}) => commentByIssueSeq(iseq),
}