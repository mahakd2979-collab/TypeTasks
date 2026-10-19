// 1. TaskStatus: Only three valid statuses are allowed
type TaskStatus = "todo" | "in-progress" | "done";

// 2. Task interface: Defines the shape of a task
interface Task {
    id: number;
    title: string;
    status: TaskStatus;
}

// 3. addTask: Adds a new task and returns a new array
function addTask(tasks: Task[], title: string): Task[] {
    const newId =
        tasks.length === 0
            ? 1
            : Math.max(...tasks.map(task => task.id)) + 1;

    const newTask: Task = {
        id: newId,
        title: title,
        status: "todo"
    };

    return [...tasks, newTask];
}

// 4. completeTask: Marks the matching task as done
function completeTask(tasks: Task[], id: number): Task[] {
    return tasks.map(task =>
        task.id === id
            ? { ...task, status: "done" }
            : task
    );
}

// 5. filterByStatus: Returns tasks with the requested status
function filterByStatus(
    tasks: Task[],
    status: TaskStatus
): Task[] {
    return tasks.filter(task => task.status === status);
}

// 6. EXTRA OPERATION: deleteTask
// Removes a task using its ID
function deleteTask(tasks: Task[], id: number): Task[] {
    return tasks.filter(task => task.id !== id);
}

// Example usage
let tasks: Task[] = [];

tasks = addTask(tasks, "Learn TypeScript");
tasks = addTask(tasks, "Build TypeTasks");
tasks = addTask(tasks, "Practice GitHub");

tasks = completeTask(tasks, 1);

const completedTasks: Task[] = filterByStatus(tasks, "done");
const pendingTasks: Task[] = filterByStatus(tasks, "todo");

tasks = deleteTask(tasks, 2);

// These should produce TypeScript errors:

 const invalidTask: Task = { id: 1, title: "Test" };

 const invalidId: Task = {
         id: "3",
    title: "Test",
     status: "todo"
 };

 filterByStatus(tasks, "finished");