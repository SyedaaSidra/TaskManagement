import { Container, Typography, Grid, Box, Paper, Button } from "@mui/material";
import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";
import { logout } from "../api/auth";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleAddTask = (newTask) => {
    const fakeId = Date.now(); // temporary ID
    setTasks([...tasks, { ...newTask, id: fakeId }]);
  };
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        My Tasks
      </Typography>

      {/*  Task Form */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Add New Task</Typography>
        <TaskForm onSubmit={handleAddTask} />
      </Paper>

      <Grid container spacing={2}>
        {tasks.map((task) => (
          <Grid item xs={12} sm={6} md={4} key={task.id}>
            <TaskCard task={task} onDelete={handleDeleteTask} />
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </Container>
  );
}
