import * as Joi from 'joi';

export const updateUserValidator = Joi.object({
  firstname: Joi.string().min(2).max(20).required(),
  lastname: Joi.string().min(2).max(20).required(),
});
