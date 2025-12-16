import vine from '@vinejs/vine'

import { membership_role } from '../../generated/prisma/enums.ts';

const user_id = vine.number();
const event_id = vine.number();
const user_email = vine.string().email().optional();
const role = vine.enum(Object.values(membership_role)).optional();

const membershipIdSchema = vine.object({
    event_id
});

const membershipCreationSchema = vine.object({
    user_email,
    event_id,
    role
});

const membershipUpdateSchema = vine.object({
    user_id,
    event_id,
    role
});

export const
    membershipSearch = vine.create(membershipIdSchema),
    membershipCreation = vine.create(membershipCreationSchema),
    membershipUpdate = vine.create(membershipUpdateSchema),
    membershipDeletion = vine.create(membershipIdSchema)
;
