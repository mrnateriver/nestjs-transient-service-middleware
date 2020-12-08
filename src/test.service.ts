import { Injectable, Logger, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.TRANSIENT })
export class TestService {
  private field: string;

  constructor() {
    Logger.log(`TestService c-tor`);
    this.field = 'hello there';
  }

  get privateField() {
    return this.field;
  }
}
