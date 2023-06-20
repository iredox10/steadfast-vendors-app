import jwt from "jsonwebtoken"
const signJwt = ({ id, email }) => {
    return jwt.sign({ id, email }, "secret-key", { expiresIn: "2m" })
  }
export default signJwt