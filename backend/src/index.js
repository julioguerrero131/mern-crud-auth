import app from "./app.js";
import { connectDB } from "./db.js";

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectDB();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
