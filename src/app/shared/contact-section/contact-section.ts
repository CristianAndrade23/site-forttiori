import { Component, signal } from '@angular/core';
import { email, form, FormField, FormRoot, minLength, required } from '@angular/forms/signals';
import { CONTACT_EMAIL } from '../contact';

export const SUBJECTS = ['Comercial', 'Suporte', 'Carreira'] as const;

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMPTY_MESSAGE: ContactMessage = { name: '', email: '', subject: '', message: '' };

@Component({
  selector: 'app-contact-section',
  imports: [FormField, FormRoot],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  protected readonly subjects = SUBJECTS;
  protected readonly sent = signal(false);

  protected readonly model = signal<ContactMessage>({ ...EMPTY_MESSAGE });

  protected readonly contactForm = form(
    this.model,
    (path) => {
      required(path.name, { message: 'Informe seu nome.' });
      required(path.email, { message: 'Informe seu e-mail.' });
      email(path.email, { message: 'Informe um e-mail válido.' });
      required(path.subject, { message: 'Escolha um assunto.' });
      required(path.message, { message: 'Escreva sua mensagem.' });
      minLength(path.message, 10, { message: 'A mensagem precisa ter pelo menos 10 caracteres.' });
    },
    {
      submission: {
        action: async (field) => {
          this.openMailClient(field().value());
          this.sent.set(true);
          field().reset({ ...EMPTY_MESSAGE });
        },
      },
    },
  );

  /** O site é estático: a mensagem é enviada pelo cliente de e-mail do visitante. */
  private openMailClient({ name, email, subject, message }: ContactMessage): void {
    const params = new URLSearchParams({
      subject: `[${subject}] Contato de ${name}`,
      body: `${message}\n\n${name} <${email}>`,
    });
    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
  }
}
