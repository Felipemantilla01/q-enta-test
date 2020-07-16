import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdlPlayerAddEditComponent } from './mdl-player-add-edit.component';

describe('MdlPlayerAddEditComponent', () => {
  let component: MdlPlayerAddEditComponent;
  let fixture: ComponentFixture<MdlPlayerAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdlPlayerAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdlPlayerAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
