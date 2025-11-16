import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMaterial } from './hello-material';

describe('HelloMaterial', () => {
  let component: HelloMaterial;
  let fixture: ComponentFixture<HelloMaterial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloMaterial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloMaterial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
