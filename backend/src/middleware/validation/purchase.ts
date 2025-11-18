import vine from '@vinejs/vine'

const purchaseIdSchema = vine.object({
    id: vine.number()
});

const purchaseCreationSchema = vine.object({
    date: vine.date(),
    // user_id dans validator 
});

export const
    purchaseSearch = vine.compile(purchaseIdSchema),
    purchaseCreation = vine.compile(purchaseCreationSchema),
    purchaseDeletion = vine.compile(purchaseIdSchema)
;
