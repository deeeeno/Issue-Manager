import { User } from "./structure";

const users = [
  {
    seq: 1,
    id: "dino",
    nickName: "디노",
    password: "12345",
    create_datetime: "20220211131511",
  },
  {
    seq: 2,
    id: "bino",
    nickName: "비노",
    password: "12345",
    create_datetime: "20220211131511",
  },
  {
    seq: 3,
    id: "cino",
    nickName: "씨노",
    password: "12345",
    create_datetime: "20220211131511",
  },
  {
    seq: 4,
    id: "fino",
    nickName: "픠노",
    password: "12345",
    create_datetime: "20220211131511",
  },
  {
    seq: 5,
    id: "gino",
    nickName: "기노",
    password: "12345",
    create_datetime: "20220211131511",
  },
];

export const userById = (id) => {
  return users.filter((user) => user["id"] === id)[0];
};
export const userBySeq = (seq) => {
  return users.filter((user) => user["seq"] === seq)[0];
};
export const createUser = ({ id, password, nickName }) => {
  const newUser = new User(users.length + 1, id, nickName, password);
  users.push(newUser);
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
