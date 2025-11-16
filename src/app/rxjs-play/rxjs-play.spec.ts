import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPlay } from './rxjs-play';

describe('RxjsPlay', () => {
  let component: RxjsPlay;
  let fixture: ComponentFixture<RxjsPlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsPlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsPlay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
