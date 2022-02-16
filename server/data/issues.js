import { Issue } from "./mongo";
import { Response } from "./structure";

export const issueById = (id) => {
   return new Promise((resolve) => {
      Issue.find({ id }).then((ret) => {
         resolve(ret);
      });
   });
};

export const issuesByAsigneeSeq = (asignee_seq) => {
   return new Promise((resolve) => {
      Issue.find({ asignee_seq }).then((ret) => {
         resolve(ret);
      });
   });
};

export const issuesByReporterSeq = (reporter_seq) => {
   return new Promise((resolve) => {
      Issue.find({ reporter_seq }).then((ret) => {
         resolve(ret);
      });
   });
};

export const issuesByProjectSeq = (project_seq) => {
   return new Promise((resolve) => {
      Issue.find({ project_seq }).then((ret) => {
         resolve(ret);
      });
   });
};
export const createIssue = (issue) => {
   const newIssue = new Issue(issue);
   return new Promise((resolve, reject) => {
      newIssue
         .save()
         .then((newD) => {
            resolve(new Response("success", JSON.stringify(newD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const updateIssue = (seq, issue) => {
   return new Promise((resolve, reject) => {
      Issue.findOneAndUpdate({ seq }, issue, { new: true })
         .then((modD) => {
            resolve(new Response("success", JSON.stringify(modD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const deleteIssue = ({ seq }) => {
   return new Promise((resolve, reject) => {
      Issue.deleteOne({ seq })
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
