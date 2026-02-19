import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";

export const authRequired = (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) return res.status(401).json({ message: "Unauthorized, no token provided" });
        
        jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ message: "Unauthorized, invalid token" });
            req.user = decoded;
            next();
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}