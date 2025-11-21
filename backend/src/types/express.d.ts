import "express-serve-static-core";
import { JwtPayload } from "jsonwebtoken";

declare module "express-serve-static-core" {
    interface Request {
        session: string | JwtPayload;
    }
}
