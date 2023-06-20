import jwt from "jsonwebtoken"
const verifyAdmin = async (req, res, next) => {
  try {
    const header = req.headers.authorization
    if (header) {
        const token = header.split(' ')[1]
        res.json(token)
      jwt.verify(token, "secret-key", (err, result) => {
        // if (err) {
        //     // throw new Error("")
        // } else {
        //     res.json(result)
        // }
      })
    } else {
      throw new Error("Token verification failed")
    }
  } catch (err) {
    res.json(err.message)
  }
}

export default verifyAdmin