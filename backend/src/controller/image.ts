import { genImgUploadUrl } from "../images.ts";
import { Request, Response } from "express";

export const upload = async (req : Request, res : Response) : Promise<void> => {
    try {
        res.status(201).send(await genImgUploadUrl());
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
}
