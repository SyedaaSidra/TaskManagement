import {
  Card,
  CardContent,
  Typography,
  Chip,
  Stack,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TaskCard({ task, onDelete }) {
  return (
    <Card variant="outlined" sx={{ p: 1 }} fullWidth>
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">{task.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {task.description}
          </Typography>

          <Stack direction="row" spacing={1}>
            <Chip label={task.status} color="primary" size="small" />
            <Chip label={task.priority} color="secondary" size="small" />
          </Stack>

          {onDelete && (
            <IconButton onClick={() => onDelete(task.id)} color="error">
              <DeleteIcon />
            </IconButton>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
