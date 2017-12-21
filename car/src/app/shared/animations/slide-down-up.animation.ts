import { animate, state, style, transition, trigger} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const SlideDownUpAnimation: AnimationEntryMetadata = trigger('slideDownUpAnimation', [
  state('*', style({
      opacity: 1,
      height: '*'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      height: 0
    }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({
      height: 0,
      opacity: 0,
    }))
  ])
]);
