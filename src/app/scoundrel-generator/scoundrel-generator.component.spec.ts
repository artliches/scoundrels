import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoundrelGeneratorComponent } from './scoundrel-generator.component';

describe('ScoundrelGeneratorComponent', () => {
  let component: ScoundrelGeneratorComponent;
  let fixture: ComponentFixture<ScoundrelGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoundrelGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoundrelGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
