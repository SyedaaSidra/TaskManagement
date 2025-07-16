import { useState } from "react";
import { TextField, MenuItem, Button, Stack } from "@mui/material";

export default function TaskForm({ onSubmit }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "low",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(task);
    }
    console.log("Task Submitted:", task);
    setTask({ title: "", description: "", status: "pending", priority: "low" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          multiline
          fullWidth
          required
        />
        <TextField
          select
          label="Status"
          name="status"
          value={task.status}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in_progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
        <TextField
          select
          label="Priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <Button type="submit" variant="contained">
          Add Task
        </Button>
      </Stack>
    </form>
  );
}
