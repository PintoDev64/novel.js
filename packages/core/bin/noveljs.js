import { exec } from "child_process";
import { log } from "console";

const ElectronProcess = exec("electron .")

ElectronProcess.addListener("spawn", () => log("core process: start"))
ElectronProcess.addListener("close", () => {
    if (!ElectronProcess.killed) ElectronProcess.kill(0);
    log("core pocess: exit")
})
ElectronProcess.addListener("message", (message) => log(message))

ElectronProcess.stdout.on("data", (chunk) => log(chunk))
ElectronProcess.stdout.on("error", (chunk) => log(chunk))