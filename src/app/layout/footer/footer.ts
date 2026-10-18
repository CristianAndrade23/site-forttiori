import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONTACT_EMAIL } from '../../shared/contact';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly contactEmail = CONTACT_EMAIL;
  protected readonly currentYear = new Date().getFullYear();

  protected readonly socialLinks: SocialLink[] = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/forttiori.it/',
      icon: 'assets/img/vector-instagram.svg',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ForttioriIT',
      icon: 'assets/img/vector-facebook.svg',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/forttiori-it',
      icon: 'assets/img/vector-linkedin.svg',
    },
  ];
}
