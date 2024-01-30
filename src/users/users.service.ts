/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO, UpdateUserDTO } from './dto';

@Injectable()
export class UsersService {
   private users = [
      {
         id: 1,
         name: 'Leanne Graham',
         email: 'Sincere@april.biz',
         role: 'INTERN',
      },
      {
         id: 2,
         name: 'Ervin Howell',
         email: 'Shanna@melissa.tv',
         role: 'INTERN',
      },
      {
         id: 3,
         name: 'Clementine Bauch',
         email: 'Nathan@yesenia.net',
         role: 'ENGINEER',
      },
      {
         id: 4,
         name: 'Patricia Lebsack',
         email: 'Julianne.OConner@kory.org',
         role: 'ENGINEER',
      },
      {
         id: 5,
         name: 'Chelsey Dietrich',
         email: 'Lucio_Hettinger@annie.ca',
         role: 'ADMIN',
      },
   ];

   findAll(role?: string) {
      if (role) {
         if (!['INTERN', 'ENGINEER', 'ADMIN'].includes(role)) {
            throw new BadRequestException("Wrong role parametr")
         }
         return this.users.filter((user) => user.role === role);
      }
      return this.users;
   }

   findOne(id: number) {
      const user = this.users.find((user) => user.id === id);

      if (!user) {
         throw new NotFoundException(`User with id ${id} is not found`)
      }

      return user;
   }

   create(createUserDTO: CreateUserDTO) {
      const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
      const newUser = {
         id: usersByHighestId[0].id + 1,
         ...createUserDTO,
      };
      this.users.push(newUser);
      return newUser;
   }

   update(
      id: number,
      updatedUserDTO: UpdateUserDTO,
   ) {
      this.users = this.users.map((user) => {
         if (user.id === id) {
            return { ...user, ...updatedUserDTO };
         }
         return user;
      });

      return this.findOne(id);
   }

   delete(id: number) {
      const removedUser = this.findOne(id);

      this.users = this.users.filter((user) => user.id !== id);

      return removedUser;
   }
}
