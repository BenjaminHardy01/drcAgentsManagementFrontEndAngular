import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupementsComponent } from './groupements.component';

describe('GroupementsComponent', () => {
  let component: GroupementsComponent;
  let fixture: ComponentFixture<GroupementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
