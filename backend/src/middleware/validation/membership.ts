import vine from '@vinejs/vine'

import { membership_role } from '../../generated/prisma/enums.ts';

const user_id = vine.number();
const event_id = vine.number();
const user_email = vine.string().email();
const role = vine.enum(Object.values(membership_role)).optional();

const membershipIdSchema = vine.object({
    user_id,
    event_id
});

const membershipCreationSchema = vine.object({
    user_email,
    event_id
});

const eventJoinSchema = vine.object({
    event_id
});

const cashiersByEventSchema = vine.object({
    event_id
});

export const
    membershipSearch = vine.create(membershipIdSchema),
    membershipCreation = vine.create(membershipCreationSchema),
    eventJoin = vine.create(eventJoinSchema),
    membershipDeletion = vine.create(membershipIdSchema),
    cashiersByEvent = vine.create(cashiersByEventSchema)
;
