import { Component } from '@angular/core';

@Component({
  selector: 'app-together-banner',
  // A imagem fica no template (e não no CSS) para ser resolvida a partir do <base href>.
  template: `
    <section class="together" style="background-image: url('assets/img/together.jpg')">
      <h2 class="text-center">
        <img src="assets/img/apoio-titulo.svg" alt="" aria-hidden="true" />
        Juntos podemos mais
      </h2>
    </section>
  `,
  styles: `
    .together {
      padding: 250px 0;
      color: #fff;
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      text-transform: uppercase;
    }

    h2 {
      font-size: 2.5rem;
    }
  `,
})
export class TogetherBanner {}
