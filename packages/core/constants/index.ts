import { resolve } from "node:path";

export const Global: spaceConstants.Global = {
    searchSource: resolve("../test")
}

export const Electron: spaceConstants.Electron = {
    defaultConfig: {
        
    }
}

export const Core: spaceConstants.Core = {
    defaultConfig: {
        interactive: false,
        compiler: {
            debugging: true,
            source: Global.searchSource
        },
        api: {
            port: 2345
        }
    }
}