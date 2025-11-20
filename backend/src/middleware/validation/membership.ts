import vine from '@vinejs/vine'

const membershipIdSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number()
});

const membershipCreationSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number(),
    role: vine.enum(['host', 'cashier', 'guest'])
});

const membershipUpdateSchema = vine.object({
    id: vine.number(),
    role: vine.enum(['host', 'cashier', 'guest']).optional()
});

export const
    membershipSearch = vine.compile(membershipIdSchema),
    membershipCreation = vine.compile(membershipCreationSchema),
    membershipUpdate = vine.compile(membershipUpdateSchema),
    membershipDeletion = vine.compile(membershipIdSchema)
;