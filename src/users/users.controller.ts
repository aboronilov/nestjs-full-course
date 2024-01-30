/* eslint-disable prettier/prettier */
import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   Patch,
   Post,
   Query,
   ParseIntPipe,
   ValidationPipe
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Controller('users')
export class UsersController {
   constructor(private readonly usersService: UsersService) { }

   @Get()
   findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
      return this.usersService.findAll(role);
   }

   @Get(':id')
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.findOne(id);
   }

   @Post()
   create(
      @Body(ValidationPipe) createUserDTO: CreateUserDTO,
   ) {
      return this.usersService.create(createUserDTO);
   }

   @Patch(':id')
   update(
      @Param('id', ParseIntPipe) id: number,
      @Body(ValidationPipe) userUpdateDTO: UpdateUserDTO,
   ) {
      return this.usersService.update(id, userUpdateDTO);
   }

   @Delete(':id')
   delete(@Param('id', ParseIntPipe) id: number) {
      return this.usersService.delete(id);
   }
}
