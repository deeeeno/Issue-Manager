import dotenv from "dotenv";
dotenv.config();
import { UserModel, IssueModel, ProjectModel, CommentModel } from "./structure";
import mongoose from "mongoose";
const { MONGO_URI } = process.env;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

const userSchema = new mongoose.Schema(UserModel);
const projectSchema = new mongoose.Schema(ProjectModel);
const issueSchema = new mongoose.Schema(IssueModel);
const commentSchema = new mongoose.Schema(CommentModel);

//users collection
export const User = mongoose.model("User", userSchema);
//projects collection
export const Project = mongoose.model("Project", projectSchema);
//issues collection
export const Issue = mongoose.model("Issue", issueSchema);
//comments collection
export const Comment = mongoose.model("Comment", commentSchema);
