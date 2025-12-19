import vine from '@vinejs/vine'

const id = vine.number();
const user_id = vine.number();
const event_id = vine.number()

const purchaseIdSchema = vine.object({
    id
});

const purchaseListForUserSchema = vine.object({
    user_id
});

const purchasesByEventSchema = vine.object({
    event_id
});

export const
    purchaseSearch = vine.create(purchaseIdSchema),
    purchaseDeletion = vine.create(purchaseIdSchema),
    purchaseListForUser = vine.create(purchaseListForUserSchema),
    purchasesByEvent = vine.create(purchasesByEventSchema)
;
