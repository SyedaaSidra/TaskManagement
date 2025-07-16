import api from "./axios";

export const getTasks = async () => {
  try {
    const res = await api.get("tasks/");
    return res.data;
  } catch (err) {
    console.error(" Failed to fetch tasks:", err.message);
    throw err;
  }
};

export const createTask = async (task) => {
  try {
    const res = await api.post("tasks/", task);
    return res.data;
  } catch (err) {
    console.error(" Failed to create task:", err.message);
    throw err;
  }
};

export const updateTask = async (id, task) => {
  try {
    const res = await api.put(`tasks/${id}/`, task);
    return res.data;
  } catch (err) {
    console.error(" Failed to update task:", err.message);
    throw err;
  }
};

export const deleteTask = async (id) => {
  try {
    const res = await api.delete(`tasks/${id}/`);
    return res.data;
  } catch (err) {
    console.error(" Failed to delete task:", err.message);
    throw err;
  }
};
