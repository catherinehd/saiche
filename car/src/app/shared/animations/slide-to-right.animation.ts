import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const SlideToRightAnimation: AnimationEntryMetadata = trigger('slideToRightAnimation', [
  state('*', style({
      transform: 'translateX(0)',
      zIndex: 1
    })
  ),
  transition(':enter', [
    style({
      transform: 'translateX(100%)',
      zIndex: 1
    }),
    animate('.3s ease-out')
  ]),
  transition(':leave', [
    animate('.3s ease-out', style({
      transform: 'translateX(100%)',
      zIndex: 1
    }))
  ])
]);


export const slideToLeftAnimation: AnimationEntryMetadata = trigger('slideLeftAnimation', [
  state('*', style({
      opacity: 1,
      transform: 'translateX(0)'
    })
  ),
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }),
    animate('.3s ease-in')
  ]),
  transition(':leave', [
    animate('.3s ease-out', style({
      opacity: 0,
      transform: 'translateX(100%)'
    }))
  ])
]);
