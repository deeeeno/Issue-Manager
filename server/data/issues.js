import { Issue } from "./structure";
const issues = [
  {
    seq: 1,
    id: "TEST-1",
    project_seq: 1,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131301",
  },
  {
    seq: 1,
    id: "TEST-2",
    project_seq: 1,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131302",
  },
  {
    seq: 1,
    id: "TEST-3",
    project_seq: 1,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131303",
  },
  {
    seq: 1,
    id: "TEST-4",
    project_seq: 1,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131304",
  },
  {
    seq: 1,
    id: "ABCD-1",
    project_seq: 2,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131305",
  },
  {
    seq: 1,
    id: "ABCD-2",
    project_seq: 2,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131306",
  },
  {
    seq: 1,
    id: "ABCD-3",
    project_seq: 2,
    reporter_seq: 1,
    asignee_seq: 3,
    status: "in progress",
    priority: 3,
    title: "테스트이슈",
    description: "이건 테스트다 알겠니?",
    create_datetime: "202202131307",
  },
];

export const issueById = (id) => {
  return issues.filter((issue) => issue["id"] === id)[0];
};

export const issuesByAsigneeSeq = (asignee_seq) => {
  return issues.filter((issue) => issue["asignee_seq"] === asignee_seq);
};
export const issuesByReporterSeq = (reporter_seq) => {
  return issues.filter((issue) => issue["reporter_seq"] === reporter_seq);
};
export const issuesByProjectSeq = (project_seq) => {
  return issues.filter((issue) => issue["project_seq"] === project_seq);
};
export const createIssue = ({
  id,
  reporter_seq,
  asignee_seq,
  status,
  priority,
  title,
  description,
}) => {
  const newIssue = new Issue(
    issues.length + 1,
    id,
    reporter_seq,
    asignee_seq,
    status,
    priority,
    title,
    description
  );
  issues.push(newIssue);
  return newIssue.seq;
};
export const updateIssue = ({
  seq,
  id,
  reporter_seq,
  asignee_seq,
  status,
  priority,
  title,
  description,
}) => {
  const idx = issues.findIndex((issue) => issue.seq === seq);
  issues[idx].id = id;
  issues[idx].reporter_seq = reporter_seq;
  issues[idx].asignee_seq = asignee_seq;
  issues[idx].status = status;
  issues[idx].priority = priority;
  issues[idx].description = description;
  issues[idx].title = title;
  return 1;
};
export const deleteIssue = ({ seq }) => {
  issues.splice(
    issues.findIndex((issue) => issue.seq === seq),
    1
  );
  return 1;
};
/*
export const createIssue = (id,reporter_seq,asignee_seq,status,priority,title,description)=>{
    console.log(id,reporter_seq,asignee_seq,status,priority,title,description)
    const newIssue = new Issue(issues.length+1,id,reporter_seq,asignee_seq,status,priority,title,description);
    console.log(newIssue);
    issues.push(newIssue);
    return newIssues.seq;
}
*/
