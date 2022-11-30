import {ActionReducerMap, createReducer} from '@ngrx/store';
import {UserPreferences, userPreferencesInitialState} from '../temp.model';

export interface AppState {
  userPreferences: UserPreferences;
}

export const reducers: ActionReducerMap<AppState> = {
  userPreferences: createReducer(userPreferencesInitialState)
}
