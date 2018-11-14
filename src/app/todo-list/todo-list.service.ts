import { Injectable } from '@angular/core';
import { TaskModel } from 'src/app/todo-list/task.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  ELEMENT_DATA1 =new Map<number,TaskModel>();;
   tasks = new Map<number,TaskModel>(); 
     
  constructor() {   
    //this.ELEMENT_DATA1 =[];
    this.ELEMENT_DATA1.set({ "key": 1, "value": { "id": 0, "description": "desc"} })
    
   // this.ELEMENT_DATA1.set({ "key": 1, "value": { "id": 0, "description": "desc"} })
  }

  addTask(desc:string, picker:Date ){
   let task = new TaskModel(desc,picker);
   this.tasks.set(task.id,task);
  }

  removeTask(task:TaskModel){
    this.tasks.delete(task.id);
  }

  get totalIsDone(){
    let total = 0;
    for(let t of this.tasks.values()){
        if(t.isDone){
            total++;
        }
    }
    return total;
}

}
