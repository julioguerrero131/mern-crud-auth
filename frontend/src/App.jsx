import { BrowserRouter, Routes, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/tasks" element={<h1>All Task</h1>} />
        <Route path="/add-task" element={<h1>Add Task</h1>} />
        <Route path="/tasks/:id" element={<h1>One Task</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App