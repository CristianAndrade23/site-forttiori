import { TestBed } from '@angular/core/testing';
import { SectionTitle } from './section-title';

describe('SectionTitle', () => {
  it('should switch to the white icon when light is set', async () => {
    const fixture = TestBed.createComponent(SectionTitle);
    const icon = () => (fixture.nativeElement as HTMLElement).querySelector('img')!;

    await fixture.whenStable();
    expect(icon().getAttribute('src')).toBe('assets/img/apoio-titulo.svg');

    fixture.componentRef.setInput('light', true);
    await fixture.whenStable();
    expect(icon().getAttribute('src')).toBe('assets/img/apoio-titulo-branco.svg');
  });
});
