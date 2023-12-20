import express from "express";
import cors from "cors";


const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("server is running");
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
