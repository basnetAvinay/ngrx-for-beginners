import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoComponent} from './todo.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {todoFeatureKey, todoReducer} from './store/todo.reducer';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', component: TodoComponent}
];

@NgModule({
  declarations: [TodoComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(todoFeatureKey, todoReducer)
  ],
  exports: [
    RouterModule
  ],
})
export class TodoModule {
}
