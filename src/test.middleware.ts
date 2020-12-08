import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { TestService } from './test.service';

@Injectable()
export class TestMiddleware implements NestMiddleware {
  constructor(private test: TestService) {
    Logger.log(`Middleware c-tor, test.privateField: ${test.privateField}`);
  }

  use(req: Request, res: Response, next: () => void): void {
    Logger.log(`Middleware function, test.privateField: ${this.test.privateField}`);
    next();
  }
}
