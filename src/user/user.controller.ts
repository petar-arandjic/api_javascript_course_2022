import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpError } from '../error/http.error';
import { CreateUserDTO } from './dto/create-user.dto';
import { ValidationError } from '../error/validation.error';
import { UpdateUserDTO } from './dto/update-user.dto';

@ApiTags('User')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOkResponse({ type: [User] })
  @Get('/')
  async get(): Promise<User[]> {
    return this.userService.get();
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ type: HttpError })
  @Get('/:id')
  async getById(@Param('id') id: number) {
    return this.userService.findByPkOrFail(id);
  }

  @ApiCreatedResponse({ type: User })
  @ApiBadRequestResponse({ type: ValidationError })
  @ApiConflictResponse({ type: HttpError })
  @Post('/')
  async create(@Body() createUser: CreateUserDTO): Promise<User> {
    return await this.userService.create(createUser);
  }

  @ApiOkResponse({ type: User })
  @ApiNotFoundResponse({ type: HttpError })
  @ApiBadRequestResponse({ type: ValidationError })
  @Put('/:id')
  async update(@Param('id') id: number, @Body() updateUser: UpdateUserDTO) {
    return this.userService.update(id, updateUser);
  }
}
