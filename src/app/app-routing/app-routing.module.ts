import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VoidComponent} from '../components/void/void.component';

const routes: Routes = [
  {path: '', component: VoidComponent},
  {path: 'todo', loadChildren: () => import('../forms/todo/todo.module').then(m => m.TodoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
