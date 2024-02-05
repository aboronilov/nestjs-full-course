import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly dataBaseService: DatabaseService){}

  async create(createEmployeeDto: Prisma.EmolyeeCreateInput) {
    return this.dataBaseService.emolyee.create({
      data: createEmployeeDto
    });
  }

  async findAll(role?: "INTERN" | "ENGINEER" | "ADMIN") {
    if (role) {
      return this.dataBaseService.emolyee.findMany({
        where: {
          role
        }
      });
    }

    return this.dataBaseService.emolyee.findMany()
  }

  async findOne(id: number) {
    return this.dataBaseService.emolyee.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateEmployeeDto: Prisma.EmolyeeUpdateInput) {
    return this.dataBaseService.emolyee.update({
      where: {
        id
      },
      data: updateEmployeeDto
    });
  }

  async remove(id: number) {
    return this.dataBaseService.emolyee.delete({
      where: {
        id
      }
    });
  }
}
