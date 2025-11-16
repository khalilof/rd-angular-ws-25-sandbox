import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotToodos } from './not-toodos';

describe('NotToodos', () => {
  let component: NotToodos;
  let fixture: ComponentFixture<NotToodos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotToodos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotToodos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
