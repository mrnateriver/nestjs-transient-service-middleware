import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { TestService } from './test.service';

@Controller()
export class AppController {
  constructor(private test: TestService, private readonly appService: AppService) {
    Logger.log(`AppController c-tor, test.privateField: ${test.privateField}`);
  }

  @Get()
  getHello(): string {
    Logger.log(`AppController.getHello, test.privateField: ${this.test.privateField}`);
    return this.appService.getHello();
  }
}
