import { getCurrentDate } from "../util/date";
export const User = function (seq, id, nickName, password) {
  this.seq = seq;
  this.id = id;
  this.nickName = nickName;
  this.password = password;
  this.create_datetime = getCurrentDate();
};
export const Project = function (seq, symbol, issue_count = 0) {
  this.seq = seq;
  this.symbol = symbol;
  this.issue_count = issue_count;
  this.create_datetime = getCurrentDate();
};
export const Issue = function (
  seq,
  id,
  project_seq,
  reporter_seq,
  asignee_seq,
  status,
  priority,
  title,
  description
) {
  this.seq = seq;
  this.id = id;
  this.project_seq = project_seq;
  this.reporter_seq = reporter_seq;
  this.asignee_seq = asignee_seq;
  this.status = status;
  this.priority = priority;
  this.title = title;
  this.description = description;
  this.create_datetime = getCurrentDate();
};

export const Comment = function (
  id,
  index,
  issue_seq,
  commenter_seq,
  description
) {
  this.index = index;
  this.issue_seq = issue_seq;
  this.commenter_seq = commenter_seq;
  this.description = description;
  this.create_datetime = getCurrentDate();
};
