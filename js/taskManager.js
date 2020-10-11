
const createTaskHtml = (id,name,description,assignedTo,dueDate,status,) => 
    `     <div class="card-wrapper " >
            <li class="list-group-item text-dark task-style " data-task-id=${id} >
            <span>${name}</span>
            <hr>
            <span>${description}</span>
            <hr>
            <span>${assignedTo}</span>
            <hr>
            <span>${dueDate}</span>
            <hr>
            <span>${status}</span>
            <hr>
            
            <button class="btn btn-primary done-button ">Mark as done</button>
            <button class="btn btn-danger  delete-button ">Delete</button> 
            
            </li>
            </div> 
            `
           
            
;




class taskManager { 
    constructor(currentId =0) { 
    this.tasks = [];
    this.currentId = currentId;
    }
    addTask(name,description,assignedTo,dueDate,status) {    //changed this from ,status
        const task = {
            // Increment the currentId property
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status   //Changed this from status
        };
         this.tasks.push(task);
    }
    getTaskById(taskId) { 
        let foundTask;

        for(let i = 0; i < this.tasks.length; i++){
            const task = this.tasks[i];
            if(task.id === taskId) { 
                foundTask = task;
            }
        }
            return foundTask;
        }
    


    render() { 
            const tasksHtmlList = [];
            for( let i = 0; i < this.tasks.length; i++) {
                let task = this.tasks[i];
                let date = new Date(task.dueDate); 
                const dueDate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); 
                const taskHtml = createTaskHtml(task.id,task.name, task.description, task.assignedTo, dueDate,task.status); //changed ffrom currentTask.etc
                tasksHtmlList.push(taskHtml);

            }
            
            const tasksHtml = tasksHtmlList.join('\n');
            const rendering = document.querySelector('#renderThis');
            rendering.innerHTML = tasksHtml;
    }


    save() {
                let tasksJson = localStorage.setItem('tasks', JSON.stringify(this.tasks));
                let currentId = String(this.currentId);
                localStorage.setItem('currentId', currentId);
    }

    load() {
           if (localStorage.getItem('tasks')) {
                this.tasks = JSON.parse(localStorage.getItem('tasks'))
           } else { 
            console.log('nothing here')
        }
        if (localStorage.getItem('currentId')) {
            this.currentId= JSON.parse(localStorage.getItem('currentId'))
       } else { 
        console.log('nothing here')
              }
          } 
    
      deleteTask(taskId) { 
          let newTasks = [];
        for(let i =0; i < this.tasks.length; i++){
            let task = this.tasks[i];
            if(task.id !== taskId) { 
                newTasks.push(task)
            }
        }
         this.tasks = newTasks ;
      }  

};



