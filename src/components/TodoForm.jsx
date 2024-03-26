import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const TodoForm = ({ onSaveTodo, editedTodo }) => {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    id: Date.now(),
  });
   
  useEffect(()=>{
    if(editedTodo){
      setTodo({
        title:editedTodo.title,
        description: editedTodo.description,
        id: editedTodo.id
      });
      setOpen(true);
    }
  },[editedTodo])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTodo({ title: "", description: "", id: Date.now() });
  };

  const handleSave = () => {
    onSaveTodo(todo);
    setTodo({ title: "", description: "", id: Date.now() });
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        style={{ marginBottom: "2rem" }}
      >
        Add Todo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{editedTodo ? 'Edit Todo' : 'New Todo'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            value={todo.title}
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            
            minRows={4}
            value={todo.description}
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TodoForm;
