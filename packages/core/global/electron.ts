import { app, BrowserWindow } from "electron";
import { Electron } from "../constants/index.js";

class ElectronClass implements Classes.ElectronContext {
    private static instance: ElectronClass | null = null;
    private window: Electron.BrowserWindow | null = null;
    private config: Classes.Config = Electron.defaultConfig;

    private constructor() { }

    /**
     * Obtiene la instancia unica de electron
     */
    static getInstance(): void {
        if (!ElectronClass.instance) ElectronClass.instance = new ElectronClass();
        ElectronClass.instance
    }

    startWindow(): void {
        this.window = new BrowserWindow(this.config)
    }

    startGameEvents(): void {
        
    }

    startDevelopmentEvents(): void {
        
    }
}

const ElectronInstance = ElectronClass.getInstance()

export default ElectronInstance