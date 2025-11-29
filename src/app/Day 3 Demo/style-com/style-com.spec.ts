import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCom } from './style-com';

describe('StyleCom', () => {
  let component: StyleCom;
  let fixture: ComponentFixture<StyleCom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleCom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleCom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
