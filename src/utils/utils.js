import { getAllTasks, addTask,excludeTask } from '../service/requests';

export const handTasks = async (setTasks, setIsLoading) => {
  const data = await getAllTasks();
  setTasks(data);
  setIsLoading(false);
};

export const add = (task) => {
  addTask(task)
};


export const del = (id) => {
  excludeTask(id);
};
