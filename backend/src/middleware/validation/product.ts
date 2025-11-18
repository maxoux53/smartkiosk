import vine from '@vinejs/vine'

const productIdSchema = vine.object({
    id: vine.number()
});

const productCreationSchema = vine.object({
    label: vine.string().minLength(1).maxLength(80),
    is_available: vine.boolean().optional(),
    excl_vat_price: vine.number().min(0),
    category_id: vine.number(),
});

const productUpdateSchema = vine.object({
    id: vine.number(),
    label: vine.string().minLength(1).maxLength(80).optional(),
    is_available: vine.boolean().optional(),
    excl_vat_price: vine.number().min(0).optional(),
    deletion_date: vine.date().optional(),
    category_id: vine.number().optional(),
});

export const
    productSearch = vine.compile(productIdSchema),
    productCreation = vine.compile(productCreationSchema),
    productUpdate = vine.compile(productUpdateSchema),
    productDeletion = vine.compile(productIdSchema)
;
