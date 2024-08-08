import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key";

export function generateToken(payload) {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "30d" });
  // return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
}

export function verifyToken(token) {
  try {
    const cleanedToken = token.replace("Bearer ", "");
    return jwt.verify(cleanedToken, SECRET_KEY);
  } catch (error) {
    return null;
  }
}
