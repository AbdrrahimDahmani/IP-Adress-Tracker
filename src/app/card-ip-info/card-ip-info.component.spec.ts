import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIpInfoComponent } from './card-ip-info.component';

describe('CardIpInfoComponent', () => {
  let component: CardIpInfoComponent;
  let fixture: ComponentFixture<CardIpInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIpInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
