import vine from '@vinejs/vine'

import { membership_role } from '../../generated/prisma/enums.ts';

const user_id = vine.number();
const event_id = vine.number();
const user_email = vine.string().email();

const membershipIdSchema = vine.object({
    user_id,
    event_id
});

const membershipCreationSchema = vine.object({
    user_email,
    event_id
});

const evendIdSchema = vine.object({
    event_id
});

export const
    membershipSearch = vine.create(membershipIdSchema),
    membershipCreation = vine.create(membershipCreationSchema),
    eventJoin = vine.create(evendIdSchema),
    membershipDeletion = vine.create(membershipIdSchema),
    cashiersByEvent = vine.create(evendIdSchema)
;
