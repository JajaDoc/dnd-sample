import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DnDSampleComponent } from './dn-dsample.component';

describe('DnDSampleComponent', () => {
  let component: DnDSampleComponent;
  let fixture: ComponentFixture<DnDSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DnDSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DnDSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
