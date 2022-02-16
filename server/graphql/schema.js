import { buildSchema } from "graphql";
export const schema = buildSchema(`
type User{
    seq:Int!
    id:String!
    password:String!
    nickName:String!
    create_datetime:String!
}
input UserInput{
    id:String!
    password:String!
    nickName:String!
}

type Project{
    seq:Int!
    name:String!
    symbol:String!
    issue_count:Int!
    create_datetime:String!
}
input ProjectInput{
    name:String!
    symbol:String!
    issue_count:Int!
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
    index:Float!
    issue_seq:Int!
    commenter_seq:Int!
    description:String!
    create_datetime:String!
}
input CommentInput{
    index:Float!
    issue_seq:Int!
    commenter_seq:Int!
    description:String!
}

type Response{
    status:String!
    data:String!
}

type Query{
    userById(id:String!):User
    userBySeq(seq:Int!):User!
    issuesByAsigneeSeq(asignee_seq:Int!):[Issue]!
    issuesByReporterSeq(reporter_seq:Int!):[Issue]!
    issuesByProjectSeq(project_seq:Int!):[Issue]!
    issueById(id:String!):Issue!
    projectsAll:[Project]!
    projectBySeq(seq:Int!):Project
    commentByIssueSeq(issueseq:Int!):[Comment]
}
type Mutation{
    createUser(user:UserInput!):Response!
    updateUser(seq:Int!,user:UserInput!):Response!
    deleteUser(seq:Int!):Response!
    createProject(project:ProjectInput!):Response!
    updateProject(project:ProjectInput!):Project
    deleteProject(project:ProjectInput!):Int
    createIssue(issue:IssueInput!):Response!
    updateIssue(issue:IssueInput!):Response!
    deleteIssue(seq:Int!):Response!
}
`);
