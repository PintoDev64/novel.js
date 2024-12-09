import { BrowserWindow } from "electron";
// Constants
import { Default, Electron } from "../constants/index.js";
// Classes
import ElectronEvents from "./events.js";
import CoreState from "./core.js";

class ElectronClass extends ElectronEvents implements Classes.ElectronContext {
    private static instance: ElectronClass | null = null;
    private window: Electron.BrowserWindow | null = null;
    private config: Classes.Config = Electron.defaultConfig;

    private constructor() { super() }

    /**
     * Obtiene la instancia unica de electron
     */
    static getInstance(): ElectronClass {
        if (!ElectronClass.instance) ElectronClass.instance = new ElectronClass();
        return ElectronClass.instance
    }

    startWindow() {
        const { api } = CoreState.getState()
        this.window = new BrowserWindow(this.config)
        this.window.loadURL(`http://localhost:${api?.inPort ?? Default.InPort}`)
    }

    getWindow() {
        return this.window
    }

    startGameEvents() {
        if (!this.window) return;
        this.getGameEvents(this.window)
    }

    startDevelopmentEvents() {
        if (!this.window) return;
        this.getDevelopmentEvents(this.window)
    }
}

const ElectronInstance = ElectronClass.getInstance()

export default ElectronInstance