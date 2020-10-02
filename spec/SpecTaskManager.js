describe('TaskManager', () => {
  describe('#constructor', () => {
    describe('when initializing a new TaskManager', () => {
      it('should create an empty tasks array', () => {
        const task2 = new taskManager(1);

        expect(task2.tasks).toEqual([]);
      });

      it('should set the currentId to the passed in number', () => {
        const task2 = new taskManager(1);

        expect(task2.currentId).toBe(1);
      });
    });
  });

  describe('#addTask', () => {
    describe('passing new task data as parameters', () => {
      it('should add the task to the tasks array', () => {
        const task2 = new taskManager(10);

        const task = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        task2.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(task2.tasks[0]).toEqual(task);
      });

      it('should increment the currentId property', () => {
        const task2 = new taskManager(10);

        const task = {
          id: taskManager.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        task2.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        expect(task2.currentId).toBe(11);
      });
    });
  });

  describe('#deleteTask', () => {
    describe('when passed an existing taskId', () => {
      it('should remove the task from the tasks array', () => {
        const task2 = new taskManager();

        const taskToDelete = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        task2.addTask(taskToDelete.name, taskToDelete.description, taskToDelete.assignedTom, taskToDelete.dueDate);
        task2.addTask('feed puppy', 'feed the puppy a heathy meal', 'nick', Date.now());

        task2.deleteTask(taskToDelete.id);

        expect(task2.tasks).not.toContain(taskToDelete);
      });
    });
  });

  describe('#getTaskById', () => {
    describe('when passed an existing taskId', () => {
      it('should return the task', () => {
        const task2 = new taskManager();

        const task = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        task2.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        const result = task2.getTaskById(task.id);

        expect(result).toEqual(task);
      });
    });
  });

  describe('#render', () => {
    describe('when tasks exist in the task manager', () => {
      it('should render the test in the innerHTML of the tasksList', () => {
        const task2 = new taskManager();

        const task = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          // use a specific date to make it easier to check html
          dueDate: 1601451685812,
          status: 'TODO'
        };

        task2.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        const tasksList = { innerHTML: '' };

        
        spyOn(document, 'querySelector').and.returnValue(tasksList);

        task2.render();

        
        expect(tasksList.innerHTML).toContain('<li class="list-group-item" data-task-id=0>');
        expect(tasksList.innerHTML).toContain('<h5>test</h5>');
        expect(tasksList.innerHTML).toContain('<span class="badge badge-danger">TODO</span>');
        expect(tasksList.innerHTML).toContain('<small>Assigned To: test</small>');
        expect(tasksList.innerHTML).toContain('<small>Due: 30/9/2020</small>');
        expect(tasksList.innerHTML).toContain('<p>test</p>');
        expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-success done-button mr-1 visible">Mark As Done</button>');
        expect(tasksList.innerHTML).toContain('<button class="btn btn-outline-danger delete-button">Delete</button>');
      });
    });
  });

  describe('#save', () => {
    describe('when tasks exist in the task manager', () => {
      it('should store the tasks in local storage', () => {
        const task2 = new taskManager();

        const task = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        task2.addTask(task.name, task.description, task.assignedTo, task.dueDate);

        // create JSON of the task in an array
        const tasksJson = JSON.stringify([task]);

        // spy on the localStorage
        const localStorageSpy = spyOn(localStorage, 'setItem');

        // call save
        task2.save();

        // check if localStorage was called first with the tasks key and the json
        expect(localStorageSpy.calls.first().args).toEqual(['tasks', tasksJson]);
      });

      it('should store the currentId in local storage', () => {
        const task2 = new taskManager();

        task2.addTask('test', 'test', 'test', Date.now());

        // spy on the localStorage
        const localStorageSpy = spyOn(localStorage, 'setItem');

        // call save
        task2.save();

        // create string of the currentId
        const currentId = String(task2.currentId);

        // check if localStorage was called last with the currentId key and the currentId
        expect(localStorageSpy.calls.mostRecent().args).toEqual(['currentId', currentId]);
      });
    });
  });

  describe('#load', () => {
    describe('when tasks are saved in localStorage', () => {
      it('should set the tasks array to the saved tasks', () => {
        const task2 = new taskManager();

        const task = {
          id: task2.currentId,
          name: 'test',
          description: 'test',
          assignedTo: 'test',
          dueDate: Date.now(),
          status: 'TODO'
        };

        // create a tasks array
        const tasks = [task];

        // create JSON of the tasks array
        const tasksJson = JSON.stringify(tasks);

        // spy on localStorage.getItem() and return the tasksJson.
        spyOn(localStorage, 'getItem').and.returnValue(tasksJson);

        // call load
        task2.load();

        expect(task2.tasks).toEqual(tasks);
      });
    });

    describe('when the currentId is saved in localStorage', () => {
      it('should set the currentId to the saved currentId', () => {
        const task2 = new taskManager();

        // spy on localStorage.getItem() and return a currentId as a string.
        spyOn(localStorage, 'getItem').and.returnValue('1');

        // call load
        task2.load();

        expect(task2.currentId).toBe(1);
      });
    });
  });

})

