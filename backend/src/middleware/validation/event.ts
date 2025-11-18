import vine from '@vinejs/vine'

const eventIdSchema = vine.object({
    event_id: vine.number()
});

const eventCreatedSchema = vine.object({
    name: vine.string().minLength(1).maxLength(100),
    location: vine.string().minLength(1).maxLength(80),
    image: vine.string().optional(),
    is_active: vine.boolean().optional(),
    iban: vine.string().minLength(35).maxLength(35),
});

const eventUpdatedSchema = vine.object({
    id: vine.number(),
    name: vine.string().minLength(1).maxLength(100).optional(),
    location: vine.string().minLength(1).maxLength(80).optional(),
    image: vine.string().optional(),
    is_active: vine.boolean().optional(),
    iban: vine.string().minLength(35).maxLength(35).optional(),
});

export const
    eventSearch = vine.compile(eventIdSchema),
    eventCreation = vine.compile(eventCreatedSchema),
    eventUpdate = vine.compile(eventUpdatedSchema),
    eventDeletion = vine.compile(eventIdSchema)
;