import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ContactSection } from '../../shared/contact-section/contact-section';
import { RevealOnScroll } from '../../shared/reveal-on-scroll';
import { SectionTitle } from '../../shared/section-title/section-title';
import { TogetherBanner } from '../../shared/together-banner/together-banner';
import { CASES, SERVICES, SKILLS } from './home.data';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ContactSection, RevealOnScroll, SectionTitle, TogetherBanner],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly services = SERVICES;
  protected readonly skills = SKILLS;

  private readonly cases = signal(CASES);
  protected readonly featuredCases = computed(() => this.cases().filter((c) => c.featured));
  protected readonly otherCases = computed(() => this.cases().filter((c) => !c.featured));

  protected caseBackground(image: string): string {
    return `linear-gradient(90deg, #000 0%, rgba(52, 101, 232, 0.6) 102.46%), url('${image}')`;
  }
}
