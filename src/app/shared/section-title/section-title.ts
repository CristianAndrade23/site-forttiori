import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  template: `
    <h2 class="text-center">
      <img [src]="icon()" alt="" aria-hidden="true" />
      <ng-content />
    </h2>
  `,
})
export class SectionTitle {
  /** Usa o ícone branco, para seções com fundo escuro. */
  readonly light = input(false);

  protected readonly icon = computed(() =>
    this.light() ? 'assets/img/apoio-titulo-branco.svg' : 'assets/img/apoio-titulo.svg',
  );
}
