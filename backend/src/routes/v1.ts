import { Router } from "express";

import { default as interactRouter } from "./interact.ts";

import { login, createUser } from "../controller/user.ts";
import { upload } from "../controller/image.ts"

import { userVal } from "../middleware/validation/validator.ts";
import { checkJWT } from "../middleware/identification.ts";

const router = Router();

router.post("/login", userVal.login, login);
router.post("/signup", userVal.create, createUser);
router.get("/img-upload", upload);

router.use("/interact", checkJWT, interactRouter);

export default router;
