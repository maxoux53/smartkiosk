import vine from '@vinejs/vine'

import * as c from '../../../../shared/constraint.constants.ts';

const type = vine.string().minLength(1).maxLength(c.VAT.TYPE_MAX);
const rate = vine.number().min(c.VAT.RATE_MIN).max(c.VAT.RATE_MAX);

const vatIdSchema = vine.object({
    type
});

const vatSchema = vine.object({
    type,
    rate
});

export const
    vatSearch = vine.create(vatIdSchema),
    vatCreation = vine.create(vatSchema),
    vatUpdate = vine.create(vatSchema),
    vatDeletion = vine.create(vatIdSchema)
;
