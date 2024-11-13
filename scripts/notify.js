function notify(message) {
    window.editor.pushToast({ msg: message, duration: 5000 })
}

const kwargs = { msg: "hello, world" }
notify(kwargs.msg)