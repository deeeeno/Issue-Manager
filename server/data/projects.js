import { Project } from "./mongo";
import { Response } from "./structure";

export const projectsAll = () => {
   return new Promise((resolve) => {
      Project.find().then((ret) => {
         console.log(ret);
         resolve(ret);
      });
   });
};
export const projectBySeq = (seq) => {
   return new Promise((resolve) => {
      Project.find({ seq }).then((ret) => {
         resolve(ret);
      });
   });
};

export const createProject = (project) => {
   const newProject = new Project(project);
   return new Promise((resolve, reject) => {
      newProject
         .save()
         .then((newD) => {
            resolve(new Response("success", JSON.stringify(newD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const updateProject = (seq, { name, symbol, issue_count }) => {
   return new Promise((resolve, reject) => {
      Project.findOneAndUpdate({ seq }, { name, symbol, issue_count }, { new: true })
         .then((modD) => {
            resolve(new Response("success", JSON.stringify(modD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const deleteProject = (seq) => {
   return new Promise((resolve, reject) => {
      Project.deleteOne({ seq })
         .then(({ deletedCount }) => {
            resolve(
               new Response(deletedCount === 1 ? "success" : "fail", deletedCount === 1 ? "1" : "0")
            );
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
