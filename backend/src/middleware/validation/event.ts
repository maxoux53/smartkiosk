import vine from '@vinejs/vine'

import * as c from '../../../../shared/constraint.constants.ts';

const event_id = vine.number();
const name = vine.string().minLength(1).maxLength(c.EVENT.NAME_MAX);
const location = vine.string().minLength(1).maxLength(c.EVENT.LOCATION_MAX);
const image = vine.string().optional();
const is_active = vine.boolean().optional();
const iban = vine.string().minLength(1).maxLength(c.EVENT.IBAN_MAX);
const user_id = vine.number().optional();

const eventIdSchema = vine.object({
    event_id
});

const eventCreatedSchema = vine.object({
    name,
    location,
    image,
    is_active,
    iban,
});

const eventUpdatedSchema = vine.object({
    id: vine.number(),
    name: name.optional(),
    location: location.optional(),
    image,
    is_active,
    iban: iban.optional(),
});

const eventListSchema = vine.object({
    limit: vine.number().min(1).max(100).optional(),
    cursor: vine.number().optional(),
    search: vine.string().trim().minLength(1).maxLength(c.EVENT.NAME_MAX).optional()
});

export const
    eventSearch = vine.create(eventIdSchema),
    eventCreation = vine.create(eventCreatedSchema),
    eventUpdate = vine.create(eventUpdatedSchema),
    eventDeletion = vine.create(eventIdSchema),
    eventList = vine.create(eventListSchema)
;
