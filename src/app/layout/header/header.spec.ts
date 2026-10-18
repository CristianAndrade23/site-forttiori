import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Header } from './header';

describe('Header', () => {
  let fixture: ComponentFixture<Header>;
  let element: HTMLElement;

  const menuToggle = () =>
    element.querySelector<HTMLButtonElement>('button[aria-controls="main-menu"]')!;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    element = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should start with the menu closed', () => {
    expect(element.querySelector('nav')).toBeNull();
    expect(menuToggle().getAttribute('aria-expanded')).toBe('false');
  });

  it('should open the menu and list the navigation links', async () => {
    menuToggle().click();
    await fixture.whenStable();

    const links = Array.from(element.querySelectorAll('nav a')).map((a) => a.textContent?.trim());
    expect(menuToggle().getAttribute('aria-expanded')).toBe('true');
    expect(links).toEqual(['Home', 'Sobre', 'Plano de carreira/vagas']);
  });

  it('should close the menu when Escape is pressed', async () => {
    menuToggle().click();
    await fixture.whenStable();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();

    expect(element.querySelector('nav')).toBeNull();
  });

  it('should highlight the selected language', async () => {
    const [pt, en] = Array.from(element.querySelectorAll<HTMLButtonElement>('.lang'));
    expect(pt.classList).toContain('lang-active');

    en.click();
    await fixture.whenStable();

    expect(en.classList).toContain('lang-active');
    expect(pt.classList).not.toContain('lang-active');
  });
});
