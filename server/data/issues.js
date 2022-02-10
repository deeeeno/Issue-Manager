import {Issue} from './structure';
const issues = [
    {seq:1,id:'TEST-01',reporter_seq:1,asignee_seq:3,status:'in progress', priority:3, title:'테스트이슈', description:'이건 테스트다 알겠니?'}
]

export const issueById = (id)=>{
    return issues.filter((issue)=>issue['id'] === id)[0];
}

export const issueByUserSeq = (userseq)=>{
    return issues.filter((issue)=>issue['reporter_seq'] === userseq);
}
export const createIssue = ({id,reporter_seq,asignee_seq,status,priority,title,description})=>{
    console.log(id,reporter_seq,asignee_seq,status,priority,title,description)
    const newIssue = new Issue(issues.length+1,id,reporter_seq,asignee_seq,status,priority,title,description);
    issues.push(newIssue);
    return newIssue.seq;
}
/*
export const createIssue = (id,reporter_seq,asignee_seq,status,priority,title,description)=>{
    console.log(id,reporter_seq,asignee_seq,status,priority,title,description)
    const newIssue = new Issue(issues.length+1,id,reporter_seq,asignee_seq,status,priority,title,description);
    console.log(newIssue);
    issues.push(newIssue);
    return newIssues.seq;
}
*/