import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlPlayerInfoComponent } from './mdl-player-info.component';

describe('MdlPlayerInfoComponent', () => {
  let component: MdlPlayerInfoComponent;
  let fixture: ComponentFixture<MdlPlayerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlPlayerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlPlayerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
