import { Component, OnInit ,Input} from '@angular/core';
import { TaskModel } from 'src/app/todo-list/task.model';
import { TodoListService } from 'src/app/todo-list/todo-list.service';

@Component({
  selector: 'task',
  template: `
  <div>
  <mat-checkbox color="primary"
  [(ngModel)]="task.isDone">
  </mat-checkbox>

    {{task.description}}
    {{formatDate}}
     
  <button mat-button color="primary"  (click)="service.removeTask(task)">x</button>
</div>
  `,
  styles: []
})
export class TaskComponent implements OnInit {

  @Input('source') task:TaskModel;
  
  constructor(public service:TodoListService) { }

  ngOnInit() {
  }

  get formatDate(){
    let _date = this.task.date;
    return  _date.getDate() + '/' + _date.getMonth() + '/' +  _date.getFullYear();
  }

}
