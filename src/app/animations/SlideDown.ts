import { animate, style, transition, trigger } from '@angular/animations';

export const SlideDown = trigger('SlideDown', [
  transition('void => *', [
    style({ opacity: 0, transform: 'translateY(-10px)' }),
    animate('200ms', style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition('* => void', [
    style({ opacity: 1, transform: 'translateY(0)' }),
    animate(
      '200ms cubic-bezier(0.77,0,0.18,1)',
      style({ opacity: 0, transform: 'translateY(10px)' })
    ),
  ]),
]);
