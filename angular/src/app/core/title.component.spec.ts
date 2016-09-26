/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { TitleComponent } from './title.component';
import {UserService} from "./user.service";

import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());


class MockUserService {
  public users: Array<string> = ['John', 'Steve'];
}

describe('Component: Title', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TitleComponent],
      providers: [{ provide: UserService, useClass: MockUserService }],
    });

    this.fixture = TestBed.createComponent(TitleComponent);
  });

  it('should render list', async(() => {
    const element = this.fixture.nativeElement;
    this.fixture.detectChanges();
    expect(element.querySelectorAll('span').length).toBe(2);
  }));

});
