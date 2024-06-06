class Task {
  constructor(dateDue, description) {
    this.dateDue = dateDue;
    this.description = description;
    this.status = "incomplete";
  }

  isIncomplete() {
    return this.status === "incomplete";
  }

  hasDueDate() {
    return this.dateDue !== null
  }

  isOverdue() {
    const today = new Date();
    return (this.isIncomplete() && this.hasDueDate() && today > this.dateDue);
  }
}

module.exports = Task;
