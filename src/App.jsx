import React, { useState } from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./redux/todosSlice";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editedTodo, setEditedTodo]=useState(null);

  const handleAddorEditTodo = (todo) => {
    if(!editedTodo){
        dispatch(addTodo(todo));
    }
    else{
        dispatch(editTodo(todo));
    }
    setEditedTodo();
  };
  
  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" align="center" gutterBottom>
        Todo App
      </Typography>
      <TodoForm onSaveTodo={handleAddorEditTodo} editedTodo={editedTodo} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} />
    </Container>
  );
}

export default App;
