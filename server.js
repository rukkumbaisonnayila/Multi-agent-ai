const express = require('express');
const app = express();
app.use(express.json());

// Fake database
let tasks = [];
let notes = [];

// ===== AGENTS =====

// Main Agent
function mainAgent(input) {
    if (input.includes("task")) {
        return taskAgent(input);
    } else if (input.includes("note")) {
        return notesAgent(input);
    } else {
        return "Main Agent: I will help you manage tasks and notes.";
    }
}

// Task Agent
function taskAgent(input) {
    return "Task Agent handled: " + input;
}

// Notes Agent
function notesAgent(input) {
    return "Notes Agent handled: " + input;
}

// ===== API ROUTES =====

// Add Task
app.post('/add-task', (req, res) => {
    tasks.push(req.body.task);
    res.send("Task Added Successfully");
});

// Get Tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// Add Note
app.post('/add-note', (req, res) => {
    notes.push(req.body.note);
    res.send("Note Added Successfully");
});

// Get Notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// AI Agent Route
app.post('/agent', (req, res) => {
    let input = req.body.input;
    let response = mainAgent(input);
    res.send(response);
});

// Server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
