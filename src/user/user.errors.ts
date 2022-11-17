export const USER_NOT_FOUND = {
  key: 'NOT_FOUND',
  message: 'User not found',
};

export const USER_CONFLICT = {
  key: 'CONFLICT',
  message: 'User with email already exist',
};

export const USER_VALIDATION_ERR = (errors) => {
  return {
    key: 'VALIDATION_ERROR',
    message: 'Data you sent is invalid',
    errors: errors,
  };
};
