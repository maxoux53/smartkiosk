import prisma from "../database/databaseORM.ts";
import { Request, Response } from "express";
import { PrismaClientKnownRequestError } from "../generated/prisma/internal/prismaNamespace.ts";
import { LAZY_LOADING_PAGE_DEFAULT_SIZE } from "../../../shared/constraint.constants.ts";

export const getVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        const vat = await prisma.vat.findUnique({
            where: {
                type: req.body.type,
                deletion_date: null
            }
        });

        if (vat) {
            res.send(vat);
        } else {
            res.sendStatus(404);
        }
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const getAllVats = async (req : Request, res : Response) : Promise<void> => {
    try {
        const limit = req.body.limit || LAZY_LOADING_PAGE_DEFAULT_SIZE;
        const { cursor, search } = req.body;

        const results = await prisma.vat.findMany({
            where: {
                deletion_date: null,
                ...(search
                    ? {
                          type: {
                              contains: search,
                              mode: 'insensitive'
                          }
                      }
                    : {})
            },
            orderBy: {
                type: 'asc'
            },
            take: limit + 1,
            ...(cursor
                ? {
                      cursor: { type: cursor },
                      skip: 1
                  }
                : {}),
            select: {
                type: true,
                rate: true
            }
        });

        if (!results) {
            res.sendStatus(404);
            return;
        }

        const hasNextPage = results.length > limit;
        const items = results.slice(0, limit);
        const nextCursor = hasNextPage ? items[items.length - 1]?.type ?? null : null;

        res.status(200).send({
            items,
            pageInfo: {
                nextCursor,
                hasNextPage
            }
        });
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
};

export const createVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.vat.create({
            data: {
                type: req.body.type,
                rate: req.body.rate
            }
        })

        res.sendStatus(201);
        
        // Erreur pas claire si type deja existant 
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const updateVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.vat.update({
            where: {
                type: req.body.type
            },
            data: {
                rate: req.body.rate
            }
        })

        res.sendStatus(204);
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}

export const deleteVat = async (req : Request, res : Response) : Promise<void> => {
    try {
        await prisma.vat.update({
            where: {
                type: req.body.type,
                deletion_date: null
            },
            data: {
                deletion_date: new Date()
            }
        })

        res.sendStatus(204);
    } catch(e) {
        console.error(e);
        res.sendStatus((e as PrismaClientKnownRequestError).code === 'P2025' ? 404 : 500);
    }
}
