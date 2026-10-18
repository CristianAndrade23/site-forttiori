import { afterNextRender, DestroyRef, Directive, ElementRef, inject, signal } from '@angular/core';

/**
 * Anima o elemento quando ele entra na área visível da página.
 * Substitui o antigo script jQuery (debounce + scroll) por IntersectionObserver.
 */
@Directive({
  selector: '[appRevealOnScroll]',
  host: {
    class: 'anime',
    '[class.anime-start]': 'visible()',
  },
})
export class RevealOnScroll {
  protected readonly visible = signal(false);

  constructor() {
    const element = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => this.visible.set(entry.isIntersecting),
        { rootMargin: '0px 0px -6% 0px' },
      );
      observer.observe(element);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
