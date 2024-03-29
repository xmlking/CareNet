import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

@Injectable()
export class UserService {
  id = nextId++;
  private _userName = 'Sherlock Holmes';

  // #docregion ctor
  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }
  // #enddocregion ctor

  get userName() {
    // Demo: add a suffix if this service has been created more than once
    const suffix = this.id > 1 ? ` times ${this.id}` : '';
    return this._userName + suffix;
  }
}
