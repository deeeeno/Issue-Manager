const issues = [
    {seq:1,id:'TEST-01',reporter_seq:1,asignee_seq:3,satus:'in progress', priority:'middle', title:'테스트이슈', description:'이건 테스트다 알겠니?'}
]

export const issueById = (id)=>{
    return issues.filter((issue)=>issue['id'] === id)[0];
}

export const issueByUserSeq = (userseq)=>{
    return issues.filter((issue)=>issue['reporter_seq'] === userseq)[0];
}