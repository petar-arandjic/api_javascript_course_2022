import { User } from './user';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useValue: User,
  },
];
