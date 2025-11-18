import vine from '@vinejs/vine'

const categoryIdSchema = vine.object({
    id: vine.number()
});

const categoryCreationSchema = vine.object({
    label: vine.string().minLength(1).maxLength(50),
    vat_type: vine.string().minLength(1).maxLength(1),
    picture: vine.string()
});

const categoryUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().minLength(1).maxLength(50).optional(),
    vat_type: vine.string().minLength(1).maxLength(1).optional(), // Modifiable ?
    picture: vine.string().optional()
});

export const
    categorySearch = vine.compile(categoryIdSchema),
    categoryCreation = vine.compile(categoryCreationSchema),
    categoryUpdate = vine.compile(categoryUpdateSchema),
    categoryDeletion = vine.compile(categoryIdSchema)
;
