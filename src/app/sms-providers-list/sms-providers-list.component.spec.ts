import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsProvidersListComponent } from './sms-providers-list.component';

describe('SmsProvidersListComponent', () => {
  let component: SmsProvidersListComponent;
  let fixture: ComponentFixture<SmsProvidersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmsProvidersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmsProvidersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
