import { readFileSync } from "node:fs";
import GlobalState from "./global/core.js"
import { resolve } from "node:path";

function ExecuteSuscription(state: any) {
    console.log(state);
}

GlobalState.suscribe(ExecuteSuscription);

const { compiler } = GlobalState.getState()

console.log(resolve());


const FileURl = resolve(compiler?.source ?? "test")

const fileData = readFileSync(FileURl, { encoding: 'utf-8' })

console.log(fileData);

export {
    GlobalState
}