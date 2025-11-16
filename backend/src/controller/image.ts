import prisma from "../database/databaseORM.ts";
import { eraseStoredImage, genImgUploadUrl } from "../images.ts";
import { Request, Response } from "express";

export const avatarUploadAddress = async (req : Request, res : Response) : Promise<void> => {
    const retrievedUserAvatar = (await prisma.user.findUnique({
        where: { id: req.userId },
        select: { avatar: true }
    }))!;

    const directUpload = await genImgUploadUrl();

    await prisma.user.update({
        where: { id: req.userId },
        data: { avatar: directUpload.id }
    });

    if (retrievedUserAvatar.avatar != null) {
        await eraseStoredImage(retrievedUserAvatar.avatar);
    }

    res.status(201).send(directUpload.uploadURL!);
}
