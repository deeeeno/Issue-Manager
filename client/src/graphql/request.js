import {User,Issue,Comment} from '../data/structure';

const URL = 'http://localhost:4000';

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

export const requestQuery = async function(...qs){
    const query = `{
        ${qs.join('\n')}
    }`
    console.log(qs);
    console.log(JSON.stringify({query}));
    const response = await fetch(URL,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({query})
        });
    const json = await response.json();
    console.log(json['data']);
    return json['data'];
}
