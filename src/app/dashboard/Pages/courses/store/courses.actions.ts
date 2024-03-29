import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const CoursesActions = createActionGroup({
  source: 'Courses',
  events: {
    'Load Courses': emptyProps(),
    'Load Course Detail': props<{ id_cour: number }>(),

  }
});

