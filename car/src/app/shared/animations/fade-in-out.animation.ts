import { animate, state, style, transition, trigger} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const FadeInOutAnimation: AnimationEntryMetadata = trigger('fadeInOutAnimation', [
  state('*', style({
      opacity: 1,
    })
  ),
  transition(':enter', [
    style({
      opacity: 0
    }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({
      opacity: 0,
    }))
  ])
]);

export const FadeInOutByState: AnimationEntryMetadata = trigger('fadeInOutByState', [
  state('active', style({
      backgroundColor: 'rgba(0,0,0,.4)',
      display: 'block'
    })
  ),
  state('inactive', style({
    backgroundColor: 'rgba(0,0,0,0)',
    display: 'none'
  })),
  transition('inactive <=> active', animate('300ms ease'))
]);
