import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CartComponentActions = createActionGroup({
  source: '[Cart Component]',
  events: {
    'Remove Item From Cart': props<{ id: number }>(),
    'Calculate Cart Price': emptyProps,
  },
});
