import * as Joi from 'joi';

export const createUserValidator = Joi.object({
  firstname: Joi.string().min(2).max(20).required(),
  lastname: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
});
