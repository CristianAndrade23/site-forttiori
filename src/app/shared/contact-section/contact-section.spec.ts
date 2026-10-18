import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactMessage, ContactSection } from './contact-section';

describe('ContactSection', () => {
  let fixture: ComponentFixture<ContactSection>;
  let element: HTMLElement;
  let openMailClient: ReturnType<typeof vi.fn<(message: ContactMessage) => void>>;

  const fill = (selector: string, value: string) => {
    const field = element.querySelector<HTMLInputElement | HTMLSelectElement>(selector)!;
    field.value = value;
    // Assim como no navegador, <select> dispara "input" e "change".
    field.dispatchEvent(new Event('input'));
    if (field instanceof HTMLSelectElement) {
      field.dispatchEvent(new Event('change'));
    }
  };

  const submit = async () => {
    element.querySelector('form')!.dispatchEvent(new Event('submit', { cancelable: true }));
    await fixture.whenStable();
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(ContactSection);
    element = fixture.nativeElement;
    openMailClient = vi.fn();
    // Evita a navegação para mailto: durante os testes.
    (
      fixture.componentInstance as unknown as { openMailClient: typeof openMailClient }
    ).openMailClient = openMailClient;
    await fixture.whenStable();
  });

  it('should not send and flag invalid fields when the form is empty', async () => {
    await submit();

    expect(openMailClient).not.toHaveBeenCalled();
    expect(element.querySelectorAll('.is-invalid').length).toBe(4);
    expect(element.textContent).toContain('Informe seu nome.');
  });

  it('should reject an invalid e-mail', async () => {
    fill('#contact-email', 'nao-e-um-email');
    element.querySelector('#contact-email')!.dispatchEvent(new Event('blur'));
    await fixture.whenStable();

    expect(element.querySelector('#contact-email')!.classList).toContain('is-invalid');
    expect(element.textContent).toContain('Informe um e-mail válido.');
  });

  it('should send a valid message and reset the form', async () => {
    fill('#contact-name', 'Maria');
    fill('#contact-email', 'maria@example.com');
    fill('#contact-subject', 'Comercial');
    fill('#contact-message', 'Gostaria de um orçamento.');
    await submit();

    expect(openMailClient).toHaveBeenCalledWith({
      name: 'Maria',
      email: 'maria@example.com',
      subject: 'Comercial',
      message: 'Gostaria de um orçamento.',
    });
    expect(element.querySelector('[role="status"]')?.textContent).toContain('Obrigado');
    expect(element.querySelector<HTMLInputElement>('#contact-name')!.value).toBe('');
  });
});
