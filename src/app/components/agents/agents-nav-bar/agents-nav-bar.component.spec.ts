import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsNavBarComponent } from './agents-nav-bar.component';

describe('AgentsNavBarComponent', () => {
  let component: AgentsNavBarComponent;
  let fixture: ComponentFixture<AgentsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
