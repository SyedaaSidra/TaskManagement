import { Container, Typography, Grid, Box, Paper } from "@mui/material";
import TaskForm from "../components/TaskForm";
export default function Dashboard() {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        My Tasks
      </Typography>

      {/*  Task Form */}
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6">Add New Task</Typography>
        <TaskForm />
      </Paper>

      {/* Task List */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box p={2} sx={{ border: "1px solid #ccc", borderRadius: 2 }}>
            <Typography variant="subtitle1">Sample Task Title</Typography>
            <Typography variant="body2">This is a placeholder task.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
