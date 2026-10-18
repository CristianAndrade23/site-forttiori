import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Footer } from './footer';

describe('Footer', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should show the current year and the social links', async () => {
    const fixture = TestBed.createComponent(Footer);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.copyright')?.textContent).toContain(
      String(new Date().getFullYear()),
    );
    const social = element.querySelectorAll('a[target="_blank"]');
    expect(social.length).toBe(3);
    social.forEach((link) => expect(link.getAttribute('rel')).toContain('noopener'));
  });
});
