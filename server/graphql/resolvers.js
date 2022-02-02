import {userById,userBySeq} from '../data/users';
import {issueById,issueByUserSeq} from '../data/issues';
import {commentByIssueSeq} from '../data/comments';
export const resolvers = {
    Query:{
        userById: (_,{id}) => userById(id),
        userBySeq: (_,{seq}) => userBySeq(seq),
        issueById: (_,{id}) => issueById(id),
        issueByUserSeq: (_,{seq}) => issueByUserSeq(seq),
        commentByIssueSeq: (_,{iseq}) => commentByIssueSeq(iseq),
    },
}