import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator';

export class TodolistDto {

  @IsNotEmpty()
  @IsString()
  @Length(10, 20)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(0, 40)
  description: string;

  @IsString()
  status: string;

  @IsNumber()
  @IsNotEmpty()
  due_date: number;
}
