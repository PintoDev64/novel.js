declare namespace Core {
    interface defaultConfig {
        interactive?: boolean;
        compiler?: {
            debugging?: boolean;
            source?: string;
        }
        api?: {
            inPort?: number;
            outPort?: number;
        }
    }
}

declare namespace Classes {
    /* ------| ElectronEvents |------ */
    interface ElectronEvents {
        getGameEvents(window: Electron.BrowserWindow): void;
        getDevelopmentEvents(window: Electron.BrowserWindow): void;
    }
    /* ------| ElectronContext |------ */
    type Config = Electron.BrowserWindowConstructorOptions;
    interface ElectronContext {
        /**
         * Inicializa la ventana del motor
         */
        startWindow(): void;
        /**
         * Carga los eventos de juego en la vista
         */
        startGameEvents(): void;
        /**
         * Carga los eventos de desarrollo en la vista
         */
        startDevelopmentEvents(): void;
        /**
         * Retorna la ventana de juego
         */
        getWindow(): Electron.BrowserWindow | null;
    }
    /* ------| GlobalContext |------ */
    type Listener = (state: Core.defaultConfig) => void;
    interface CoreContext {
        getState(): Core.defaultConfig;
        setState(newState: Partial<Core.defaultConfig>): void;
        suscribe(listener: Listener<Core.defaultConfig>): () => void;
    }
}

declare namespace spaceConstants {
    interface Default {
        InPort: number;
        OutPort: number;
    }
    interface Global {
        searchSource: string;
    }
    interface Electron {
        defaultConfig: Electron.BrowserWindowConstructorOptions;
    }
    interface Core {
        defaultConfig: Core.defaultConfig;
    }
}