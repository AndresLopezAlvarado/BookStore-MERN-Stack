import jwt from "jsonwebtoken";
// import { TOKEN_SECRET } from "../config.js";

export function createAccessToken(payload) {
  const TOKEN_SECRET = process.env.TOKEN_SECRET;
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      TOKEN_SECRET,
      { expiresIn: "1d" },
      (err, access_token) => {
        if (err) reject(err);
        resolve(access_token);
      }
    );
  });
}
