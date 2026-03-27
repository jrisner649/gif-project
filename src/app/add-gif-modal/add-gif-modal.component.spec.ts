import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGifModalComponent } from './add-gif-modal.component';

describe('AddGifModalComponent', () => {
  let component: AddGifModalComponent;
  let fixture: ComponentFixture<AddGifModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddGifModalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddGifModalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
