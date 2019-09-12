import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinyLookupComponent } from './destiny-lookup.component';

describe('DestinyLookupComponent', () => {
  let component: DestinyLookupComponent;
  let fixture: ComponentFixture<DestinyLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinyLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
