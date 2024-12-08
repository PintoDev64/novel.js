import { Core } from "../constants/index.js";

class CoreContext implements Classes.CoreContext {
    private config: Core.defaultConfig;
    private listeners: Classes.Listener[] = [];

    constructor(initialState: Core.defaultConfig) {
        this.config = initialState;
    }

    // Get actual library config
    getState(): Core.defaultConfig {
        return this.config;
    }

    // Update the library config
    setState(newState: Partial<Core.defaultConfig>): void {
        this.config = { ...this.config, ...newState };
        this.notifyListeners();
    }

    // Agregar un listener
    suscribe(listener: Classes.Listener): () => void {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    }

    // Notificar a los listeners
    private notifyListeners(): void {
        this.listeners.forEach((listener) => listener(this.config));
    }
}

const GlobalState = new CoreContext(Core.defaultConfig)

export default GlobalState