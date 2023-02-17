import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TodolistDto } from 'src/todolist/dtos/todolist.dto';
import { TodolistService } from 'src/todolist/services/todolist/todolist.service';

@Controller('todolist')
export class TodolistController {
  constructor(private readonly todolistService: TodolistService) {}

  @Get()
  findAll() {
    return this.todolistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.todolistService.findOne(id);
  }

  @Post()
  create(@Body() todolistDto: TodolistDto) {
    return this.todolistService.create(todolistDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() todolistDto: TodolistDto,
  ) {
    return this.todolistService.update(id, todolistDto);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.todolistService.delete(id);
  }
}
