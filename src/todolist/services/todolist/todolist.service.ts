import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodolistDto } from 'src/todolist/dtos/todolist.dto';
import { TodolistEntity } from 'src/todolist/entities/todolist.entity';
import { Todolist } from 'src/todolist/interfaces/todolist/todolist.interface';
import { Repository } from 'typeorm';

@Injectable()
export class TodolistService {
  constructor(
    @InjectRepository(TodolistEntity)
    private todolistRepository: Repository<TodolistEntity>,
  ) {}

  async delete(id: number) {
    const todolist: Todolist = await this.todolistRepository.findOneBy({ id });
    if (!todolist) {
      throw new HttpException(
        `Todolist with id=${id} not found!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.todolistRepository.delete(id);
  }
  async update(id: number, todolistDto: TodolistDto) {
    const todolist: Todolist = await this.todolistRepository.findOneBy({ id });
    if (!todolist) {
      throw new HttpException(
        `Todolist with id=${id} not found!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.todolistRepository.update(id, todolistDto);
  }
  async findOne(id: number) {
    const todolist: Todolist = await this.todolistRepository.findOneBy({ id });
    if (!todolist) {
      throw new HttpException(
        `Todolist with id=${id} not found!`,
        HttpStatus.BAD_REQUEST,
      );
    }
    return todolist;
  }
  async findAll() {
    return await this.todolistRepository.find();
  }
  async create(todolistDto: TodolistDto) {
    const newTodolist = await this.todolistRepository.create({
      ...todolistDto,
    });
    const saveTodolist = await this.todolistRepository.save(newTodolist);
    if (!saveTodolist) {
      throw new HttpException(`Create todolist failed`, HttpStatus.BAD_REQUEST);
    }
    return saveTodolist;
  }
}
