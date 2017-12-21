import { animate, state, style, transition, trigger, keyframes } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const FlyMsgAnimation: AnimationEntryMetadata = trigger('flyMsgAnimation', [
  state('*', style({
      opacity: 1,
      bottom: '15rem'
    })
  ),
  transition(':enter', [
    style({
      bottom: '6em',
      opacity: 0,
    }),
    animate('.3s ease-in-out')
  ]),
  transition(':leave', [
    animate('.3s ease-in-out', style({
      bottom: '6em',
      opacity: 0,
    }))
  ])
]);
