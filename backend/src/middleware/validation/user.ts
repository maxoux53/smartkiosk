import vine from '@vinejs/vine'

const userIdSchema = vine.object({
    id: vine.number()
});

const userCreatedSchema = vine.object({
    first_name: vine.string().minLength(1).maxLength(20),
    last_name: vine.string().minLength(1).maxLength(40),
    email: vine.string().email().maxLength(80), // vérifier existe pas deja ds controller
    password: vine.string().minLength(6).maxLength(30).optional(),
    avatar: vine.string().optional(),
});

const userUpdatedSchema = vine.object({
    id: vine.number(),
    first_name: vine.string().minLength(1).maxLength(20).optional(),
    last_name: vine.string().minLength(1).maxLength(40).optional(),
    email: vine.string().email().maxLength(80).optional(), // vérifier existe pas deja ds controller
    password: vine.string().minLength(6).maxLength(30).optional(),
    avatar: vine.string().optional()
});

export const
    userSearch = vine.compile(userIdSchema),
    userCreation = vine.compile(userCreatedSchema),
    userUpdate = vine.compile(userUpdatedSchema),
    userDeletion = vine.compile(userIdSchema)
;
