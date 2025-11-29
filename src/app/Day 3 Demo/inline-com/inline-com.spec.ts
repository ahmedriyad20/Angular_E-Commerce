import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineCom } from './inline-com';

describe('InlineCom', () => {
  let component: InlineCom;
  let fixture: ComponentFixture<InlineCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InlineCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
