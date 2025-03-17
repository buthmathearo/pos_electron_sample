const information = document.getElementById('version-info')
information.innerText = `Version Info: Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const listUsb = document.getElementById('list-usb')

const btnClick = document.getElementById("btn-list-all")
btnClick.onclick = () => {
    listUsb.innerHTML += '<li>' + 'item 1' + '</li>'
}

