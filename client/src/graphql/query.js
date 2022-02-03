export const userById = function(id,...rest){
    return `userById(id:"${id}"){
        ${rest.join(' ')}
    }`;
}
export const userBySeq = function(seq,...rest){
    return `userBySeq(seq:"${seq}"){
        ${rest.join(' ')}
    }`;
}
export const issueById = function(id,...rest){
    return `issueById(id:"${id}"){
        ${rest.join(' ')}
    }`;
}
export const issueByUserSeq = function(seq,...rest){
    return `issueByUserSeq(userseq:"${seq}"){
        ${rest.join(' ')}
    }`;
}
export const commentByIssueSeq = function(seq,...rest){
    return `commentByIssueSeq(issueseq:"${seq}"){
        ${rest.join(' ')}
    }`;
}