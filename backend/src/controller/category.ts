import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { eraseStoredImage } from '../util/images.ts';
import { LAZY_LOADING_PAGE_DEFAULT_SIZE } from "../../../shared/constraint.constants.ts";
import { appropriateHttpStatusCode } from "../util/appropriateHttpStatusCode.ts";

export const getCategory = async (req : Request, res : Response) : Promise<void> => {
    try {
        const category = await prisma.category.findFirst({
            where: {
                id: req.body.id,
                deletion_date: null
            }
        });

        if (category) {
            res.status(200).send(category);
        } else {
            res.sendStatus(404);
        }
    } catch (e) {
        
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
};

export const getAllCategories = async (req : Request, res : Response) : Promise<void> => {
    try {
        const limit = req.body.limit || LAZY_LOADING_PAGE_DEFAULT_SIZE;
        const { cursor, search } = req.body;

        const results = await prisma.category.findMany({
            where: {
                deletion_date: null,
                ...(search
                    ? {
                          label: {
                              contains: search,
                              mode: 'insensitive'
                          }
                      }
                    : {})
            },
            orderBy: {
                id: 'asc'
            },
            take: limit + 1,
            ...(cursor
                ? {
                      cursor: { id: cursor },
                      skip: 1
                  }
                : {})
        });

        if (results.length === 0) {
            res.sendStatus(204);
            return;
        }

        const hasNextPage = results.length > limit;
        const items = results.slice(0, limit);
        const nextCursor = hasNextPage ? items[items.length - 1]?.id ?? null : null;

        res.status(200).send({
            items,
            pageInfo: {
                nextCursor,
                hasNextPage
            }
        });
    } catch (e) {
        
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
}

export const getAllLabelCategory = async (req : Request, res : Response) : Promise<void> => {
    try {
        const labels = await prisma.category.findMany({
            where: {
                deletion_date: null
            },
            select: {
                id: true,
                label: true
            }
        })
        res.status(200).send(labels);
    } catch (e) {
        
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
}

export const createCategory = async (req : Request, res : Response) : Promise<void> => {
    const { label, vat_type, picture } = req.body;

    try {
        const newCategory = await prisma.category.create({
            data: {
                label,
                vat_type,
                picture
            },
            select: {
                id: true
            }
        });

        res.status(201).send(newCategory);
    } catch (e) {
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
}

export const updateCategory = async (req : Request, res : Response) : Promise<void> => {
    const { id, label, vat_type, picture } = req.body;

    try {
        await prisma.category.update({
            where: {
                id
            },
            data: {
                label, 
                vat_type,
                picture
            }
        });

        res.sendStatus(204);
    } catch (e) {
        
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
}

export const deleteCategory = async (req : Request, res : Response) : Promise<void> => {
    try {
        await eraseStoredImage((await prisma.category.update({
            where: {
                id: req.body.id
            },
            data: {
                deletion_date: new Date()
            },
            select: {
                picture: true
            }
        })).picture);

        res.sendStatus(204);
    } catch (e) {
        
        const { code, message } = appropriateHttpStatusCode(e as Error);
        res.status(code).send(message);
    }
}
