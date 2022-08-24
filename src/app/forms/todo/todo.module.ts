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
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {TodoEffects} from './store/todo.effects';

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
    HttpClientModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([TodoEffects]),
    StoreModule.forFeature(todoFeatureKey, todoReducer)
  ],
  exports: [
    RouterModule
  ],
})
export class TodoModule {
}
