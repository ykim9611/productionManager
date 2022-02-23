/* eslint-disable no-undef */
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const requestHandler = require("./Controller/index.js").requestHandler;

app.use(express.json());
app.use(express.static(__dirname + "/../dist/"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/openProductionList", requestHandler.openProductionList);
app.get("/partsList/:id", requestHandler.partsList);
app.post("/addNewProductionRun", requestHandler.addNewProductionRun);
app.patch("/editLeadTime", requestHandler.editLeadTime);
app.patch("/updateTotalLeadTime", requestHandler.updateTotalLeadTime);
app.patch("/updateReceived", requestHandler.updateReceived);
app.patch("/updateBool", requestHandler.updateBool);
//Forward all react-router routes to index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "/../dist/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, (err) => {
  if (err) console.log("Error in server setup");
  console.log(`Server listening at http://localhost:${port}`);
});
