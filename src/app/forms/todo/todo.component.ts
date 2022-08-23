import {Component, OnDestroy, OnInit} from '@angular/core';
import {Todo} from './todo.model';
import {FormControl, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {deleteTodo, saveOrUpdateTodo} from './store/todo.actions';
import {selectTodoState} from './store/todo.selector';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];
  todoDescriptionFormControl = new FormControl('', [Validators.required]);
  todoIdFormControl = new FormControl(null, [Validators.required]);

  private unsubscribe = new Subject<void>();

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {
    this.store.pipe(
      select(selectTodoState),
      takeUntil(this.unsubscribe)
    ).subscribe(todos => this.todos = todos);
  }

  undoOrCompleteTodo(item: Todo) {
    const todo: Todo = {...item, done: !item.done};
    this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: true}));
  }

  deleteTodo(todoId: number) {
    this.store.dispatch(deleteTodo({todoId}))
  }

  addTodo(): void {
    if (this.todoIdFormControl.value && this.todoIdFormControl.value >= 0 && !this.todos.find(t => t.id === this.todoIdFormControl.value)) {
      const todo: Todo = {
        id: this.todoIdFormControl.value,
        description: this.todoDescriptionFormControl.value ?? '',
        done: false
      }
      this.store.dispatch(saveOrUpdateTodo({todo, isUpdate: false}));
    }
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
