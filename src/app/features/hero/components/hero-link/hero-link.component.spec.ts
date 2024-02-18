import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLinkComponent } from './hero-link.component';

describe('HeroLinkComponent', () => {
  let component: HeroLinkComponent;
  let fixture: ComponentFixture<HeroLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HeroLinkComponent]
})
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
