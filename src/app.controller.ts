import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateExampleDto } from './create-example.dto';

@Controller({ path: '/', version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/example')
  async getExample(): Promise<any> {
    return await this.appService.getExample();
  }

  @Post('/example')
  async postExample(@Body() createExampleDto: CreateExampleDto): Promise<any> {
    return await this.appService.createExample(createExampleDto);
  }
}
