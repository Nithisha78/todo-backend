const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors()); // Allow frontend to connect
app.use(express.json());

let tasks = require("./tasks.json");

// Save tasks to the file
const saveTasks = () => {
  fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));
};

// GET all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ADD a task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: Date.now(),
    text: req.body.text,
    completed: false
  };
  tasks.push(newTask);
  saveTasks();
  res.status(201).json(newTask);
});

// DELETE a task
app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter(task => task.id != req.params.id);
  saveTasks();
  res.json({ message: "Task deleted" });
});

// EDIT or MARK AS DONE
app.put("/tasks/:id", (req, res) => {
  const { text, completed } = req.body;
  const task = tasks.find(t => t.id == req.params.id);
  if (task) {
    if (text !== undefined) task.text = text;
    if (completed !== undefined) task.completed = completed;
    saveTasks();
    res.json(task);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
