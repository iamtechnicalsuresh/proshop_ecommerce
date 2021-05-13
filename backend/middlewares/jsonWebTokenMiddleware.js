import jwt from "jsonwebtoken";

const authToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export { authToken };
