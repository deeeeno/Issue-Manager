import { User } from "./mongo";
import { Response } from "./structure";

export const userById = (id) => {
   return new Promise((resolve) => {
      User.find({ id: id }).then((ret) => {
         resolve(ret);
      });
   });
};
export const userBySeq = (seq) => {
   return new Promise((resolve) => {
      User.find({ seq: seq }).then((ret) => {
         resolve(ret);
      });
   });
};
export const createUser = (user) => {
   const newUser = new User(user);
   return new Promise((resolve, reject) => {
      newUser
         .save()
         .then((newD) => {
            resolve(new Response("success", JSON.stringify(newD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const updateUser = (seq, { id, password, nickName }) => {
   return new Promise((resolve, reject) => {
      User.findOneAndUpdate({ seq }, { id, password, nickName }, { new: true })
         .then((modD) => {
            resolve(new Response("success", JSON.stringify(modD)));
         })
         .catch((err) => {
            reject(new Response("fail", JSON.stringify(err)));
         });
   });
};
export const deleteUser = (seq) => {
   return new Promise((resolve, reject) => {
      User.deleteOne({ seq })
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
