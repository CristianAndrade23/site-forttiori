import { Component } from '@angular/core';
import { ContactSection } from '../../shared/contact-section/contact-section';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SectionTitle } from '../../shared/section-title/section-title';
import { TogetherBanner } from '../../shared/together-banner/together-banner';

export interface Partner {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
}

@Component({
  selector: 'app-sobre',
  imports: [ContactSection, RevealOnScroll, SectionTitle, TogetherBanner],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {
  protected readonly partners: Partner[] = [
    {
      name: 'Alexandre Leal',
      role: 'Analista',
      photo: 'assets/img/foto-alexandre-leal.jpg',
      linkedin: '#',
    },
    {
      name: 'David Petró',
      role: 'Software Engineer',
      photo: 'assets/img/foto-david.jpg',
      linkedin: '#',
    },
    {
      name: 'Raphael Monteiro',
      role: 'Software Engineer',
      photo: 'assets/img/foto-raphael.jpg',
      linkedin: '#',
    },
  ];
}
