import { Component, OnInit , Input ,ViewChild } from '@angular/core';
import { TodoListService } from 'src/app/todo-list/todo-list.service';
import {MatSort, MatTableDataSource} from '@angular/material';

let ELEMENT_DATA1:any;

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'todo-list',
  template: `
  <h1 > Todo List</h1>
  <div class= "container">
  <div class="item1">
  <form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="Add Task" #desc>
  </mat-form-field>

  <mat-form-field>
  <input matInput [matDatepicker]="picker" placeholder="Choose a date">
  <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
  <mat-datepicker #picker></mat-datepicker>
</mat-form-field>

  <button mat-button color="primary" (click)="add(desc.value, picker.value)">Add Task</button>
  </form>
  </div>
  <div class="item2">
  <table mat-table [dataSource]="dataSource" matSort class="mat-elevation-z8">
  
    <!-- Position Column -->
    <ng-container matColumnDef="id">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>
      <td mat-cell *matCellDef="let element"> {{element.value?.id}} </td>
    </ng-container>
  
    <!-- Name Column -->
    <ng-container matColumnDef="description">
      <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>
      <td mat-cell *matCellDef="let element"> {{element.value.description}} </td>
    </ng-container>
  
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
  </table>

  <task 
      [source]="task.value"
      *ngFor="let task of service.tasks | keyvalue">
  </task>
  </div>
  <div class="item2">
  <h4>Total: {{service.totalIsDone}} / {{service.tasks.size}}</h4>
  </div>
</div>

{{service.tasks | keyvalue | json }}
  `,
  styles: [`
    .container {
      display: flex; /* or inline-flex */
      flex-direction: column;
      flex-wrap: wrap;
      
    }
    .item1 {
      order: 1;
    }
    .item2 {
      order: 2; 
    }
    .item3 {
      order: 3; 
    }
    table {
      width: 100%;
    }
    
    th.mat-sort-header-sorted {
      color: black;
    }
    `]
})


export class TodoListComponent {

  
  constructor(private service:TodoListService) { 
    
  }
  @ViewChild(MatSort) sort: MatSort;
  
    ngOnInit() {
     
      this.dataSource.sort = this.sort;
    }
add(desc, picker){
  this.service.addTask(desc, picker);
  this.service.ELEMENT_DATA1.push({ "key": 1, "value": { "id": 0, "description": desc} })
  this.dataSource = new MatTableDataSource(this.service.ELEMENT_DATA1);
  
}

  displayedColumns: string[] = ['id', 'description'];
  
  dataSource = new MatTableDataSource(this.service.ELEMENT_DATA1)

}
