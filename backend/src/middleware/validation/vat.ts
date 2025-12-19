import vine from '@vinejs/vine'

import * as c from '../../../../shared/constraint.constants.ts';

const type = vine.string().minLength(1).maxLength(c.VAT.TYPE_MAX);
const rate = vine.number().min(c.VAT.RATE_MIN).max(c.VAT.RATE_MAX);

const vatIdSchema = vine.object({
    type
});

const vatCreationSchema = vine.object({
    type,
    rate
});

const vatUpdateSchema = vine.object({
    type,
    rate
});

const vatListSchema = vine.object({
    limit: vine.number().min(1).max(100).optional(),
    cursor: vine.string().trim().minLength(1).maxLength(c.VAT.TYPE_MAX).optional(),
    search: vine.string().trim().minLength(1).maxLength(c.VAT.TYPE_MAX).optional()
});

export const
    vatSearch = vine.create(vatIdSchema),
    vatCreation = vine.create(vatCreationSchema),
    vatUpdate = vine.create(vatUpdateSchema),
    vatDeletion = vine.create(vatIdSchema),
    vatList = vine.create(vatListSchema)
;
