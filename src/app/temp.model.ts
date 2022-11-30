export interface UserPreferences {
  isDarkTheme: boolean;
  defaultPage: string;
}

export const userPreferencesInitialState: UserPreferences = {
  isDarkTheme: true,
  defaultPage: 'todo_page_id'
}
