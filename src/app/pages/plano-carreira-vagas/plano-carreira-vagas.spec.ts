import { TestBed } from '@angular/core/testing';
import { PlanoCarreiraVagas } from './plano-carreira-vagas';

describe('PlanoCarreiraVagas', () => {
  it('should render the career stages and job openings', async () => {
    const fixture = TestBed.createComponent(PlanoCarreiraVagas);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('.stages > li').length).toBe(3);
    expect(element.querySelectorAll('.vaga-card').length).toBe(3);
    expect(element.textContent).toContain('3 vagas abertas');
  });

  it('should build an encoded mailto link for each opening', async () => {
    const fixture = TestBed.createComponent(PlanoCarreiraVagas);
    await fixture.whenStable();

    const link = (fixture.nativeElement as HTMLElement).querySelector('.vaga-card a')!;
    expect(link.getAttribute('href')).toBe(
      'mailto:contato@forttiori.it?subject=Candidatura%20-%20React%20Native%20Developer',
    );
  });
});
