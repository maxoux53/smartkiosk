import vine from '@vinejs/vine'

const orderLineIdSchema = vine.object({
    product_id: vine.number(),
    purchase_id: vine.number()
});

const orderLineCreationSchema = vine.object({
    quantity: vine.number().min(1),
    price: vine.number().min(0)
});

export const
    orderLineSearch = vine.compile(orderLineIdSchema),
    orderLineCreation = vine.compile(orderLineCreationSchema),
    orderLineDeletion = vine.compile(orderLineIdSchema)
;
