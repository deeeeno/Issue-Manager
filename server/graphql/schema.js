const {buildSchema} = require('graphql');

export const schema = buildSchema(`
type User{
    seq:Int!
    id:String!
    password:String!
    nickName:String!
    create_datetime:String!
}
type Project{
    seq:Int!
    name:String!
    symbol:String!
    issue_count:Int!
    create_datetime:String!
}
type Issue{
    seq:Int!
    id:String!
    project_seq:Int!
    reporter_seq:Int!
    asignee_seq:Int!
    status:String!
    priority:Int!
    title:String!
    description:String!
    create_datetime:String!
}
input IssueInput{
    id:String!
    project_seq:Int!
    reporter_seq:Int!
    asignee_seq:Int!
    status:String!
    priority:Int!
    title:String!
    description:String!
}

type Comment{
    index:Int!
    issue_seq:Int!
    commenter_seq:Int!
    description:String!
}

type Query{
    userById(id:String!):User
    userBySeq(seq:Int!):User!
    issueById(id:Int!):Issue!
    issueByUserSeq(userseq:Int!):[Issue]
    getProjectAll():[Project]!
    getProjectBySeq(seq:Int!):Project
    commentByIssueSeq(issueseq:Int!):[Comment]
}
type Mutation{
    createIssue(issue:IssueInput!):Int
}
`);