class TaskList {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getOverdueTasks() {
    const overdueTasks = [];

    for (const task of this.tasks) {
      if (task.isOverdue()) {
        overdueTasks.push(task);
      }
    }
    return overdueTasks;
  }
}

module.exports = TaskList;
