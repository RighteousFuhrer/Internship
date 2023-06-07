import Joi from 'joi';

export const validationSchema = Joi.object({
  values: {
    PORT: Joi.number().required(),
  },
});
