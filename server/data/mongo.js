import dotenv from "dotenv";
dotenv.config();
import { UserModel, IssueModel, ProjectModel, CommentModel } from "./structure";
import mongoose from "mongoose";
import AutoIncrementFactory from "mongoose-sequence";

const { MONGO_URI } = process.env;
mongoose
   .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log("Successfully connected to mongodb"))
   .catch((e) => console.error(e));
const AutoIncrement = AutoIncrementFactory(mongoose);

const userSchema = new mongoose.Schema(UserModel);
userSchema.plugin(AutoIncrement, { id: "users_seq", inc_field: "seq" });
const projectSchema = new mongoose.Schema(ProjectModel);
projectSchema.plugin(AutoIncrement, { id: "projects_seq", inc_field: "seq" });
const issueSchema = new mongoose.Schema(IssueModel);
issueSchema.plugin(AutoIncrement, { id: "issues_seq", inc_field: "seq" });
const commentSchema = new mongoose.Schema(CommentModel);

//users collection
export const User = mongoose.model("User", userSchema);
//projects collection
export const Project = mongoose.model("Project", projectSchema);
//issues collection
export const Issue = mongoose.model("Issue", issueSchema);
//comments collection
export const Comment = mongoose.model("Comment", commentSchema);
