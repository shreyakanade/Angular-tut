import { Component, computed,effect, Signal, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  task='';
  taskList:{id:number,task:string}[]=[]
  
  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task})
    console.log(this.taskList);
    
  }
  deleteTask(taskId:number){
    this.taskList=this.taskList.filter((item=>item.id!=taskId))
  }
  

 

}
