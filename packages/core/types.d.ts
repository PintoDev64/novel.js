declare namespace Core {
    interface defaultConfig {
        interactive?: boolean;
        compiler?: {
            debugging?: boolean;
            source?: string;
        }
        api?: {
            port?: number;
        }
    }
}

declare namespace Classes {
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
        startGameEvents(): void
        /**
         * Carga los eventos de desarrollo en la vista
         */
        startDevelopmentEvents(): void
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
    interface Global {
        searchSource: string
    }
    interface Electron {
        defaultConfig: Electron.BrowserWindowConstructorOptions;
    }
    interface Core {
        defaultConfig: Core.defaultConfig
    }
}