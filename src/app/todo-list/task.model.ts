let count:number = 0

export class TaskModel{
     id:number;
     description:string;
     isDone:boolean;
     date:Date;

     constructor(description:string,isDone:boolean= false, date:Date = new Date()){
        
        this.id=count++;
        this.description = description;
        isDone = this.isDone;
        this.date = date;
     }


}