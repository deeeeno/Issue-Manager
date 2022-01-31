const users = [
    {seq:1,id:'dino',nickName:'디노',password:'12345'},
    {seq:2,id:'bino',nickName:'비노',password:'12345'},
    {seq:3,id:'cino',nickName:'씨노',password:'12345'},
    {seq:4,id:'fino',nickName:'픠노',password:'12345'},
    {seq:5,id:'gino',nickName:'기노',password:'12345'},
]


export const userById = (id)=>{
    return users.filter((user)=>user['id'] === id)[0];
}
export const userBySeq = (seq)=>{
    return users.filter((user)=>user['seq'] === seq)[0];
}