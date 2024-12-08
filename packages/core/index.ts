import { app } from "electron";
import ElectronInstance from "./global/electron.js";

app.whenReady()
    .then(() => ElectronInstance.startWindow())
    .catch(err => console.log(err))