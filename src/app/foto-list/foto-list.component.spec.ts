import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoListComponent } from './foto-list.component';

describe('FotoListComponent', () => {
  let component: FotoListComponent;
  let fixture: ComponentFixture<FotoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FotoListComponent]
    });
    fixture = TestBed.createComponent(FotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
