import {TodoState} from './todo.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

// export const selectState = (state: TodoState) => state.todos;
export const selectState = createFeatureSelector<TodoState>('todoState');

export const selectTodoState = createSelector(selectState, (state: TodoState) => state && state.todos);
