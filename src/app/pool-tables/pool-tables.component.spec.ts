import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTablesComponent } from './pool-tables.component';

describe('PoolTablesComponent', () => {
  let component: PoolTablesComponent;
  let fixture: ComponentFixture<PoolTablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoolTablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
