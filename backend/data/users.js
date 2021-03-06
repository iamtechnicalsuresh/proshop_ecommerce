import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: "true",
  },
  {
    name: "Suresh Thapa",
    email: "suresh@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Rekha Thapa",
    email: "rekha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
