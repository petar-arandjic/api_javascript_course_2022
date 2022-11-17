import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user';
import { USER_CONFLICT, USER_NOT_FOUND, USER_VALIDATION_ERR } from "./user.errors";
import { SERVER_ERROR } from '../error/errors';
import { createUserValidator } from './validator/create-user.validator';
import { UpdateUserDTO } from "./dto/update-user.dto";
import { updateUserValidator } from "./validator/update-user.validator";

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: typeof User,
  ) {}

  /**
   * Get all users
   */
  async get(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  /**
   * Get user by PK
   */
  async findByPkOrFail(id: number): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return user;
  }

  /**
   * Create one user
   * @param createUser
   */
  async create(createUser): Promise<User> {
    const isValid = createUserValidator.validate(createUser, {
      abortEarly: false,
    });

    if (isValid.error) {
      const errors = isValid.error.details.map((detail) => {
        return {
          filed: detail.type,
          message: detail.message,
        };
      });
      throw new BadRequestException(USER_VALIDATION_ERR(errors));
    }

    try {
      return await this.userRepository.create(createUser);
    } catch (error) {
      if (error?.name === 'SequelizeUniqueConstraintError') {
        throw new ConflictException(USER_CONFLICT);
      }
      throw new InternalServerErrorException(SERVER_ERROR);
    }
  }

  /**
   * Update user
   * @param id
   * @param updateUser
   */
  async update(id: number, updateUser: UpdateUserDTO): Promise<UpdateUserDTO> {
    const isValid = updateUserValidator.validate(updateUser, {
      abortEarly: false,
    });
    if (isValid.error) {
      const errors = isValid.error.details.map((detail) => {
        return {
          filed: detail.type,
          message: detail.message,
        };
      });
      throw new BadRequestException(USER_VALIDATION_ERR(errors));
    }

    const result: any = await this.userRepository.update(updateUser, {
      where: { id },
      returning: true,
    });

    if (result[0] === 0) {
      throw new NotFoundException(USER_NOT_FOUND);
    }

    return result[1][0];
  }
}
