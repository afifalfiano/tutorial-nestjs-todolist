import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum StatusTodo {
  TODO = 'todo',
  PROGRESS = 'progress',
  COMPLETED = 'completed',
}

@Entity()
export class TodolistEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', default: StatusTodo.TODO, enum: StatusTodo })
  status: string;

  @Column({ nullable: true, type: 'bigint', default: new Date().getTime() })
  due_date: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
