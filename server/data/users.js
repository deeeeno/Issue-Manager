import { User } from "./mongo";
// const examData = new UserCollection();
// console.log(examData);
// examData.seq = 1;
// examData.id = "dino";
// examData.password = "12345";
// examData.create_datetime = "20220211131511";
// examData.save().then((newD) => {
//   console.log(newD);
// });
const users = [];
export const userById = (id) => {
  return new Promise((resolve) => {
    User.find({ id: id }).then((ret) => {
      resolve(ret);
    });
  });
};
export const userBySeq = async (seq) => {
  return new Promise((resolve) => {
    User.find({ seq: seq }).then((ret) => {
      resolve(ret);
    });
  });
};
export const createUser = ({ id, password, nickName }) => {
  //const newUser = new User(users.length + 1, id, nickName, password);
  users.push({ id: 1 });
  return users.length;
};
export const updateUser = ({ seq, id, password, nickName }) => {
  users[seq].id = id;
  users[seq].password = password;
  users[seq].nickName = nickName;
  return 1;
};
export const deleteUser = ({ seq }) => {
  users.splice(
    users.findIndex((user) => user.seq === seq),
    1
  );
  return 1;
};
