import vine from '@vinejs/vine'

const orderLineIdSchema = vine.object({
    product_id: vine.number(),
    purchase_id: vine.number()
});

const orderLineCreationSchema = vine.object({
    product_id: vine.number(),
    quantity: vine.number().min(1)
});

export const
    orderLineSearch = vine.compile(orderLineIdSchema),
    orderLineCreation = vine.compile(orderLineCreationSchema),
    orderLineDeletion = vine.compile(orderLineIdSchema)
;
