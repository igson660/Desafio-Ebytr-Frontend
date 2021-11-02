export async function getAllTasks() {
  try {
   const tasks = fetch('http://localhost:3001/')
    .then(r => r.json())
    .then(({tasks}) => console.log(tasks));
    
    return tasks;
  } catch (error) {
    return null;
  }
};
