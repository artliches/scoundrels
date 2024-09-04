import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevilGeneratorComponent } from './devil-generator.component';

describe('DevilGeneratorComponent', () => {
  let component: DevilGeneratorComponent;
  let fixture: ComponentFixture<DevilGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevilGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevilGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
