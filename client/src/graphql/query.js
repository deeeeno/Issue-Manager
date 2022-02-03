const user_field = ['seq','id','password','nickName'];
const issue_field = ['seq','id','reporter_seq','asignee_seq','status','priority','title','description'];
const comment_field = ['index','issue_seq','commenter_seq','description'];

export const userById = function(id,...rest){
    return `userById(id:"${id}"){
        ${(rest[0]==='*') ? user_field.join(' ') : rest.join(' ')}
    }`;
}
export const userBySeq = function(seq,...rest){
    return `userBySeq(seq:${seq}){
        ${(rest[0]==='*') ? user_field.join(' ') : rest.join(' ')}
    }`;
}
export const issueById = function(id,...rest){
    return `issueById(id:"${id}"){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const issueByUserSeq = function(seq,...rest){
    return `issueByUserSeq(userseq:${seq}){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const commentByIssueSeq = function(seq,...rest){
    return `commentByIssueSeq(issueseq:${seq}){
        ${(rest[0]==='*') ? comment_field.join(' ') : rest.join(' ')}
    }`;
}