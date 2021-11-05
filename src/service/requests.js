export async function getAllTasks() {
  try {
    const tasks = fetch('http://localhost:3001/')
    .then(r => r.json())
    .then(({tasks}) => tasks);
    
    return tasks;
  } catch (error) {
    return null;
  }
};

export function addTask(task) {
  const body = { task: task }
  console.log(JSON.stringify(body));

  try {
    fetch('http://localhost:3001/', {
      method: 'POST',
      header: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(body)
    });
  } catch (error) {
    return null;
  }
};

export async function UpdateTask() {
  try {
    const tasks = fetch('http://localhost:3001/')
    .then(r => r.json())
    .then(({tasks}) => tasks);
    
    return tasks;
  } catch (error) {
    return null;
  }
};

export function excludeTask(id) {
  const data = { _id: id}

  try {
    fetch('http://localhost:3001/', {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } catch (error) {
    return null;
  }
};
