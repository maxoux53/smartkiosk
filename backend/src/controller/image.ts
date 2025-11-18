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

export const productPictureUploadAddress = async (req : Request, res : Response) : Promise<void> => {
    const retrievedProductPicture = (await prisma.product.findUnique({
        where: { id: req.params.productId },
        select: { picture: true }
    }))!;

    const directUpload = await genImgUploadUrl();

    await prisma.product.update({
        where: { id: req.params.productId },
        data: { picture: directUpload.id }
    });

    if (retrievedProductPicture.picture != null) {
        await eraseStoredImage(retrievedProductPicture.picture);
    }

    res.status(201).send(directUpload.uploadURL!);
}
