import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateExampleDto } from './create-example.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getExample() {
    return await getManager().query(`SELECT * FROM example`);
  }

  async createExample(data: CreateExampleDto) {
    const { name, age } = data;
    return { name, age };
  }
}
