import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const DelayLeaveAnimation: AnimationEntryMetadata = trigger('delayLeaveAnimation', [
  state('*', style({
      zIndex: 1
    })
  ),
  transition(':enter', [
    style({
      zIndex: 1
    }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({
      zIndex: 0,
      // webkitFilter: 'brightness(.8)',
      // filter: 'brightness(.8)'
    }))
  ])
]);
