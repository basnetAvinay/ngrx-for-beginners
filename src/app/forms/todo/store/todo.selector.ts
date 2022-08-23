import {TodoState} from './todo.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export const selectTodoState = createFeatureSelector<TodoState>('todoState');

export const selectTodos = createSelector(selectTodoState, (state: TodoState) => state && state.todos);
