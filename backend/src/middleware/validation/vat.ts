import vine from '@vinejs/vine'

const vatIdSchema = vine.object({
    type: vine.string().minLength(1).maxLength(1)
});

const vatCreationSchema = vine.object({
    type: vine.string().minLength(1).maxLength(1),
    rate: vine.number().min(0).max(100)
});

const vatUpdateSchema = vine.object({
    type: vine.string().minLength(1).maxLength(1),
    rate: vine.number().min(0).max(100).optional()
});

export const
    vatSearch = vine.compile(vatIdSchema),
    vatCreation = vine.compile(vatCreationSchema),
    vatUpdate = vine.compile(vatUpdateSchema),
    vatDeletion = vine.compile(vatIdSchema)
;
