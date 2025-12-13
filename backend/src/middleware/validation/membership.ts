import vine from '@vinejs/vine'
import { membership_role } from '../../generated/prisma/enums.ts';

const roleEnumValues = Object.values(membership_role);

const membershipIdSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number()
});

const membershipCreationSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number(),
    role: vine.enum(roleEnumValues)
});

const membershipUpdateSchema = vine.object({
    user_id: vine.number(),
    event_id: vine.number(),
    role: vine.enum(roleEnumValues).optional()
});

export const
    membershipSearch = vine.compile(membershipIdSchema),
    membershipCreation = vine.compile(membershipCreationSchema),
    membershipUpdate = vine.compile(membershipUpdateSchema),
    membershipDeletion = vine.compile(membershipIdSchema)
;
