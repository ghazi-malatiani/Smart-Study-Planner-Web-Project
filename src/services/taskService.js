// LocalStorage helpers
const STORAGE_KEY = "study_tasks";

function loadFromStorage() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function saveToStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Fetch all tasks
export async function fetchTasks() {
  return loadFromStorage();
}

// Create a new task
export async function createTask(task) {
  const tasks = loadFromStorage();
  tasks.push({ ...task, id: Date.now().toString() });
  saveToStorage(tasks);
}

// Update a task by ID
export async function updateTask(id, updatedFields) {
  const tasks = loadFromStorage();
  const updated = tasks.map((t) =>
    t.id === id ? { ...t, ...updatedFields } : t
  );
  saveToStorage(updated);
}

// Delete a task
export async function deleteTask(id) {
  const tasks = loadFromStorage();
  const filtered = tasks.filter((t) => t.id !== id);
  saveToStorage(filtered);
}
 