import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type Language = 'PT' | 'EN';

export interface MenuItem {
  label: string;
  path: string;
}

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
  host: {
    '(document:keydown.escape)': 'closeMenu()',
  },
})
export class Header {
  protected readonly menuItems: MenuItem[] = [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Plano de carreira/vagas', path: '/plano-carreira-vagas' },
  ];

  protected readonly languages: Language[] = ['PT', 'EN'];

  protected readonly menuOpen = signal(false);
  protected readonly language = signal<Language>('PT');

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected selectLanguage(language: Language): void {
    this.language.set(language);
  }
}
