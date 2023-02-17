import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodolistController } from './controllers/todolist/todolist.controller';
import { TodolistEntity } from './entities/todolist.entity';
import { TodolistService } from './services/todolist/todolist.service';

@Module({
  imports: [TypeOrmModule.forFeature([TodolistEntity])],
  controllers: [TodolistController],
  providers: [TodolistService]
})
export class TodolistModule {}
