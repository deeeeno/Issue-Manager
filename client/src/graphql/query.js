const user_field = ['seq','id','password','nickName','create_datetime'];
const project_field = ['seq','name','symbol','issue_count','create_datetime']
const issue_field = ['seq','id','project_seq','reporter_seq','asignee_seq','status','priority','title','description','create_datetime'];
const comment_field = ['index','issue_seq','commenter_seq','description','create_datetime'];

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
export const userByKeyword = function(keyword,...rest){
    console.log(keyword);
    return `userByKeyword(keyword:"${keyword}"){
        ${(rest[0]==='*') ? user_field.join(' ') : rest.join(' ')}
    }`;
}
export const projectsAll = function(...rest){
    return `projectsAll{
        ${(rest[0]==='*') ? project_field.join(' ') : rest.join(' ')}
    }`
}
export const projectBySeq = function(seq,...rest){
    return `projectBySeq(seq:${seq}){
        ${(rest[0]==='*') ? project_field.join(' ') : rest.join(' ')}
    }`
}
export const issueById = function(id,...rest){
    return `issueById(id:"${id}"){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const issuesByAsigneeSeq = function(asignee_seq,...rest){
    return `issuesByAsigneeSeq(asignee_seq:${asignee_seq}){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const issuesByReporterSeq = function(reporter_seq,...rest){
    return `issuesByReporterSeq(reporter_seq:${reporter_seq}){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const issuesByProjectSeq = function(project_seq,...rest){
    return `issuesByProjectSeq(project_seq:${project_seq}){
        ${(rest[0]==='*') ? issue_field.join(' ') : rest.join(' ')}
    }`;
}
export const commentByIssueSeq = function(seq,...rest){
    return `commentByIssueSeq(issueseq:${seq}){
        ${(rest[0]==='*') ? comment_field.join(' ') : rest.join(' ')}
    }`;
}