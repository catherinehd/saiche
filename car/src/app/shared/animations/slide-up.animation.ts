import { animate, state, style, transition, trigger} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const SlideUpAnimation: AnimationEntryMetadata = trigger('slideUpAnimation', [
  state('*', style({
      opacity: 1,
      transform: 'translateY(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({
      transform: 'translateY(100%)',
      opacity: 0,
    }))
  ])
]);
