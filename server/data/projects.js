const projects = [
    {seq:1,name:'테스트 이슈', symbol:'TEST',issue_count:4},
    {seq:2,name:'abcd project', symbol:'ABCD',issue_count:3}
]

export const getProjectAll = ()=>{
    return projects;
}
export const getProjectBySeq = (seq)=>{
    const ret = projects.find((project)=>project.seq === seq);
    return ret ? ret : null;
}