import { resolve } from "node:path";
import { cwd } from "node:process";

export const Global: spaceConstants.Global = {
    scriptSource: resolve(cwd(), "src/scripts")
}

export const Default: spaceConstants.Default = {
    InPort: 2004,
    OutPort: 2345
}

export const Electron: spaceConstants.Electron = {
    defaultConfig: {
        width: 800,
        height: 600,
        minWidth: 800,
        minHeight: 600,
        webPreferences: {
            devTools: true
        }
    }
}

export const Core: spaceConstants.Core = {
    defaultConfig: {
        interactive: false,
        compiler: {
            debugging: true,
            source: Global.scriptSource
        },
        api: {
            inPort: Default.InPort,
            outPort: Default.OutPort
        }
    }
}