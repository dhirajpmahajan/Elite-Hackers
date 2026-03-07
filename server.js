const express = require("express");
const cors = require("cors");

const eventRoutes = require("./events");
const participantRoutes = require("./participants");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
res.send("Server running");
});

app.use("/events", eventRoutes);
app.use("/participants", participantRoutes);

app.listen(5000, ()=>{
 console.log("Server running on port 5000");
});
