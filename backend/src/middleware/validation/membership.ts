import vine from '@vinejs/vine'

const membershipIdSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number()
});

const membershipCreationSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number(),
    role: vine.string().minLength(1).maxLength(10) // Vérification du role dans controller
});

const membershipUpdateSchema = vine.object({
    id: vine.number(),
    role: vine.string().minLength(1).maxLength(10).optional() // Vérification du role dans controller
});

export const
    membershipSearch = vine.compile(membershipIdSchema),
    membershipCreation = vine.compile(membershipCreationSchema),
    membershipUpdate = vine.compile(membershipUpdateSchema),
    membershipDeletion = vine.compile(membershipIdSchema)
;