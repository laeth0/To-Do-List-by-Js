let tasks = [];
showMainMenu()
// Task object constructor
function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
}

// Show the main menu 
function showMainMenu() {
    console.log('***************************');
    console.log('Welcome to JS TODO-APP');
    console.log('***************************');
    console.log('Select an action:');
    console.log('1) Add a new task');
    console.log('2) List all tasks');
    console.log('3) List completed tasks');
    console.log('4) Mark the task as done');
    console.log('5) Delete a task');
    console.log('6) Sort tasks by the due date');
    console.log('7) Sort tasks by priority');
    console.log('8) Clear all tasks');
    console.log('9) Close the programe');
    console.log('***************************');
    console.log("What's your choice? ");
    process.stdin.once("data", (choice) => {
        if (choice == 1)
            addNewTask();
        else if (choice == 2)
            listAllTasks();
        else if (choice == 3)
            listCompletedTasks();
        else if (choice == 4)
            markTaskAsCompleted();
        else if (choice == 5)
            deleteTask();
        else if (choice == 6)
            sortTasksByDueDate();
        else if (choice == 7)
            sortTasksByPriority();
        else if (choice == 8)
            clearAllTasks();
        else if (choice == 9) {
            console.log('Good Luck');
            process.exit();
        }
    })

}

// Function to add a new task
function addNewTask() {
    console.log("Enter task description: ");
    process.stdin.once("data", (description) => {
        console.log("Enter due date:");
        process.stdin.once("data", (dueDate) => {
            console.log("Enter priority level:");
            process.stdin.once("data", (priority) => {
                const task = new Task(description, dueDate, priority);
                tasks.push(task);
                console.log('Task added successfully!');
                showMainMenu();
            });
        });

    });
}

// Function to list all tasks
function listAllTasks() {
    if (tasks.length === 0) {
        console.log('No tasks found.');
    } else {
        console.log('All tasks:');
        tasks.forEach((task, index) => {
            console.log(`${index + 1}) Description: ${task.description}`);
            console.log(`   Due Date: ${task.dueDate}`);
            console.log(`   Priority: ${task.priority}`);
            console.log(`   Completed: ${task.completed ? 'Yes' : 'No'}`);
            console.log('-------------------');
        });
    }
    showMainMenu();
}

// Function to list completed tasks
function listCompletedTasks() {
    const completedTasks = tasks.filter(task => task.completed);
    if (completedTasks.length === 0) {
        console.log('No completed tasks found.');
    } else {
        console.log('Completed tasks:');
        completedTasks.forEach((task, index) => {
            console.log(`${index + 1}) Description: ${task.description}`);
            console.log(`   Due Date: ${task.dueDate}`);
            console.log(`   Priority: ${task.priority}`);
            console.log('-------------------');
        });
    }
    showMainMenu();
}

// Function to mark a task as completed
function markTaskAsCompleted() {
    console.log("Enter the index of the task to mark as completed: ");
    process.stdin.once('data', (index) => {
        if (index >= 1 && index <= tasks.length) {
            tasks[index - 1].completed = true;
            console.log('Task marked as completed.');
        } else {
            console.log('Invalid task index.');
        }
        showMainMenu();
    });
}

// Function to delete a task
function deleteTask() {
    console.log("Enter the index of the task to delete: ");
    process.stdin.once('data', (indx) => {
        if (indx >= 1 && indx <= tasks.length) {
            tasks.splice(indx - 1, 1);
            console.log('Task deleted successfully.');
        }
        else {
            console.log('Invalid task index.');
        }
        showMainMenu();
    });
}

// Function to sort tasks by due date
function sortTasksByDueDate() {
    tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log('Tasks sorted by due date.');
    showMainMenu();
}

// Function to sort tasks by priority
function sortTasksByPriority() {
    tasks.sort(function (a, b) {
        if (a.priority > b.priority) return 1;
        if (a.priority < b.priority) return -1;
        if (a.priority == b.priority) return 0;
    })
    console.log("task sorted by priority");
    showMainMenu();

}

function clearAllTasks() {
    tasks = []
    console.log("all tasks deleted");
    showMainMenu();
}
