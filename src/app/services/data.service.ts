import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser: any;
  DataBase:any={
    'enjoyal':{uname:'enjoyal', pswd:'abcd',pswd2:'abcd', tasks:[],completed:false}
  }
  constructor() {
    this.getDetails();
  }

  getDetails(){
   if(this.DataBase){
     this.DataBase=JSON.parse(localStorage.getItem('DataBase')||'');
   }
   if(this.currentUser){
     this.currentUser= JSON.parse(localStorage.getItem('currentUser') || '');
   }
  }
  
  register(uname:any,pswd:any,Cpswd:any){
    var DataBase=this.DataBase;
    if(uname in DataBase){
      return false;
    }
    else{
        DataBase[uname]={
          uname:uname,
          pswd:Cpswd,
          tasks: [],
          completed:false
        }
        localStorage.setItem('DataBase',JSON.stringify(DataBase));
        return true;
    }
  }
  login(uname:any,pswd:any){
    var DataBase=this.DataBase;
    if(uname in DataBase){
      if(pswd==DataBase[uname]['pswd'])
      {
      this.currentUser=uname;
      localStorage.setItem('currentUser',uname);
      return true;
      }
      else{
        return false;
      }
    }
    else{
      return false;
    }
  }
  addTask(uname:any, task:any){
    var DataBase=this.DataBase;
    DataBase[uname]['tasks'].push(task)
    localStorage.setItem('DataBase',JSON.stringify(DataBase));
    return this.DataBase[uname].tasks;
  }
  
  clearBox(task:any){
      return task='';
    }

  currentTask='';

  editTask(currentTask:any){
    this.currentTask=currentTask;
    return this.currentTask
  }

  updateTask(etask:any, uname:any, currentTask:any){
    var DataBase=this.DataBase;
    for(let t in DataBase[uname].tasks){
      if (DataBase[uname]['tasks'][t]==currentTask) {
         DataBase[uname]['tasks'][t]=etask;
      }
    }
    localStorage.setItem('DataBase',JSON.stringify(DataBase));
    return this.DataBase[uname].tasks;
    // return etask;
    }

    removeTask( uname:any, currentTask:any){
    var DataBase=this.DataBase;
    // for(let t in DataBase[uname].tasks){
    //   if (DataBase[uname]['tasks'][t]==currentTask) {
    //     DataBase[uname]['tasks'].pop(currentTask)
        
    //     console.log(currentTask);
    //     return this.DataBase[uname].tasks;

    //   }
    // }
    this.DataBase[uname].tasks = this.DataBase[uname].tasks.filter((i:any)=> i!==currentTask);
    localStorage.setItem('DataBase',JSON.stringify(DataBase));

        return this.DataBase[uname].tasks;

    
    }
    preload_tasks(uname:any){
      var DataBase=this.DataBase;
      return DataBase[uname].tasks
    }
  }
  

