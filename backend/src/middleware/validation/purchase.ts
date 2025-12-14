import vine from '@vinejs/vine'

const purchaseIdSchema = vine.object({
    id: vine.number()
});

const purchaseCreationSchema = vine.object({
    user_id: vine.number()
});

const purchaseListForUserSchema = vine.object({
    user_id: vine.number()
})

export const
    purchaseSearch = vine.compile(purchaseIdSchema),
    purchaseCreation = vine.compile(purchaseCreationSchema),
    purchaseDeletion = vine.compile(purchaseIdSchema),
    purchaseListForUser = vine.compile(purchaseListForUserSchema)
;
