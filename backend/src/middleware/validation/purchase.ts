import vine from '@vinejs/vine'

const purchaseIdSchema = vine.object({
    id: vine.number()
});

const purchaseCreationSchema = vine.object({
    user_id: vine.number()
});

const purchaseListSchema = vine.object({
    // optionnal if admin
    user_id: vine.number().optional()
})

export const
    purchaseSearch = vine.compile(purchaseIdSchema),
    purchaseCreation = vine.compile(purchaseCreationSchema),
    purchaseDeletion = vine.compile(purchaseIdSchema),
    purchaseList = vine.compile(purchaseListSchema)
;
