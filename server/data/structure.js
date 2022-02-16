import { getCurrentDate } from "../util/date";

export const UserModel = {
   seq: Number,
   id: String,
   password: String,
   nickName: String,
   create_datetime: { type: String, default: getCurrentDate() },
};
export const ProjectModel = {
   name: String,
   seq: Number,
   symbol: String,
   issue_count: Number,
   create_datetime: { type: String, default: getCurrentDate() },
};
export const IssueModel = {
   seq: Number,
   id: String,
   project_seq: Number,
   reporter_seq: Number,
   asignee_seq: Number,
   status: String,
   priority: Number,
   title: String,
   description: String,
   create_datetime: { type: String, default: getCurrentDate() },
};
export const CommentModel = {
   index: Number,
   issue_seq: Number,
   commenter_seq: Number,
   description: String,
   create_datetime: { type: String, default: getCurrentDate() },
};

export const Response = function (status, data) {
   this.status = status;
   this.data = data;
};
