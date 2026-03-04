import User from "../models/user.model.js";
import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ 
      user: req.user.id
    }).populate("user");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task || task.user._id.toString() !== req.user.id)
      return res.status(404).json({
        message: "Task not found",
      });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({ 
      title, 
      description, 
      date,
      user: req.user.id
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true }
    );
    if (!task || taskCheck.user.toString() !== req.user.id)
      return res.status(404).json({
        message: "Task not found",
      });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete({
      _id: req.params.id,
      user: req.user.id
    });
    if (!task) return res.status(404).json({ 
      message: "Task not found" 
    });
    res.status(200).json({ 
      message: "Task deleted successfully" 
    });
  } catch (error) {
    
  }
};
