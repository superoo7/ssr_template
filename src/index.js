// server side
import "babel-polyfill"
import express from "express";
import {
  matchRoutes
} from 'react-router-config'
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import Routes from "./client/Routes";

const app = express();

app.use(express.static("public"));

app.get("*", async (req, res) => {
  const store = createStore();

  console.log(matchRoutes(Routes, req.path))

  res.send(await renderer(req, store));
});

app.listen(3000, () => {
  console.log(`listening to port 3000`);
});