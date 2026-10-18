import { Component, computed, signal } from '@angular/core';
import { CONTACT_EMAIL } from '../../shared/contact';
import { ContactSection } from '../../shared/contact-section/contact-section';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SectionTitle } from '../../shared/section-title/section-title';
import { TogetherBanner } from '../../shared/together-banner/together-banner';

export interface CareerStage {
  title: string;
  icon: string;
  steps: string[];
}

export interface JobOpening {
  id: number;
  title: string;
  skills: string[];
}

@Component({
  selector: 'app-plano-carreira-vagas',
  imports: [ContactSection, RevealOnScroll, SectionTitle, TogetherBanner],
  templateUrl: './plano-carreira-vagas.html',
  styleUrl: './plano-carreira-vagas.css',
})
export class PlanoCarreiraVagas {
  protected readonly stages: CareerStage[] = [
    {
      title: '1ª Fase',
      icon: 'assets/img/1-fase-icon.svg',
      steps: ['Formação', 'Práticas', 'Apresentações'],
    },
    {
      title: '2ª Fase',
      icon: 'assets/img/2-fase-icon.svg',
      steps: ['Prova de qualificação'],
    },
    {
      title: '3ª Fase',
      icon: 'assets/img/3-fase-icon.svg',
      steps: [
        'Profissional alocado e preparado para trabalhar em grandes projetos, sejam eles internos ou externos.',
      ],
    },
  ];

  protected readonly openings = signal<JobOpening[]>([
    { id: 1, title: 'React Native Developer', skills: ['Skill 1', 'Skill 2', 'Skill 3'] },
    { id: 2, title: 'React Native Developer', skills: ['Skill 1', 'Skill 2', 'Skill 3'] },
    { id: 3, title: 'React Native Developer', skills: ['Skill 1', 'Skill 2', 'Skill 3'] },
  ]);

  protected readonly openingsLabel = computed(() => {
    const total = this.openings().length;
    return total === 1 ? '1 vaga aberta' : `${total} vagas abertas`;
  });

  protected applyLink(opening: JobOpening): string {
    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Candidatura - ${opening.title}`)}`;
  }
}
