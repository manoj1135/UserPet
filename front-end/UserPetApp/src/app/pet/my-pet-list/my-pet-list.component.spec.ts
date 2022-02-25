import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPetListComponent } from './my-pet-list.component';

describe('MyPetListComponent', () => {
  let component: MyPetListComponent;
  let fixture: ComponentFixture<MyPetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
