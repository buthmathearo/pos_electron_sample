const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    // we can also expose variables, not just functions
})

contextBridge.exposeInMainWorld('utils', {
    sayHello: () => 'Hello from the renderer!'
    // we can also expose variables, not just functions
})
