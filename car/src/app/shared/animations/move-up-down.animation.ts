import { animate, state, style, transition, trigger} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export const MoveUpDownAnimation: AnimationEntryMetadata = trigger('moveUpDownAnimation', [
  state('active', style({
      transform: 'translateY(0)'
    })
  ),
  state('inactive', style({
    transform: 'translateY(100%)'
  })),
  transition('active <=> inactive', animate('.3s ease')),
]);
